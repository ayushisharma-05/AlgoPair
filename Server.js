const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

app.use(cors());
app.use(express.json());

// Store active rooms
const rooms = new Map();

// Generate a random room code
function generateRoomCode() {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
}

// API endpoint to generate room code
app.post('/api/rooms/generate-code', (req, res) => {
    const roomCode = generateRoomCode();
    const roomId = roomCode;
    rooms.set(roomId, {
        code: roomCode,
        users: new Set()
    });
    res.json({ roomId, code: roomCode });
});

// Socket.IO connection handling
io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('join room', (roomId) => {
        if (!rooms.has(roomId)) {
            socket.emit('room not found');
            return;
        }

        const room = rooms.get(roomId);
        if (room.users.size >= 2) {
            socket.emit('room full');
            return;
        }

        socket.join(roomId);
        room.users.add(socket.id);
        socket.emit('user joined', { roomId });
        socket.to(roomId).emit('user joined', { roomId });
    });

    socket.on('leave room', (roomId) => {
        if (rooms.has(roomId)) {
            const room = rooms.get(roomId);
            room.users.delete(socket.id);
            socket.leave(roomId);
            socket.to(roomId).emit('user left');
            
            if (room.users.size === 0) {
                rooms.delete(roomId);
            }
        }
    });

    socket.on('sending signal', (payload) => {
        io.to(payload.userToSignal).emit('user joined', { 
            signal: payload.signal, 
            callerID: payload.callerID 
        });
    });

    socket.on('returning signal', (payload) => {
        io.to(payload.callerID).emit('receiving returned signal', {
            signal: payload.signal,
            id: socket.id
        });
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
        // Clean up rooms when user disconnects
        for (const [roomId, room] of rooms.entries()) {
            if (room.users.has(socket.id)) {
                room.users.delete(socket.id);
                socket.to(roomId).emit('user left');
                if (room.users.size === 0) {
                    rooms.delete(roomId);
                }
            }
        }
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});