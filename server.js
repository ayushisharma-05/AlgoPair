const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

// Enable CORS
app.use(cors());

// Serve static files
app.use(express.static(path.join(__dirname)));

// Store active rooms and their users
const rooms = new Map();

io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);

    socket.on('join-room', ({ room, name }) => {
        // Leave any previous room
        if (socket.room) {
            socket.leave(socket.room);
            const roomUsers = rooms.get(socket.room);
            if (roomUsers) {
                roomUsers.delete(socket.id);
                if (roomUsers.size === 0) {
                    rooms.delete(socket.room);
                } else {
                    io.to(socket.room).emit('user-left', name);
                }
            }
        }

        // Join new room
        socket.join(room);
        socket.room = room;
        socket.name = name;

        // Add user to room's user list
        if (!rooms.has(room)) {
            rooms.set(room, new Map());
        }
        rooms.get(room).set(socket.id, name);

        // Notify room members
        socket.emit('room-joined', room);
        socket.to(room).emit('user-joined', name);
        console.log(`${name} joined room ${room}`);
    });

    socket.on('code-update', ({ room, code }) => {
        socket.to(room).emit('code-update', code);
    });

    socket.on('chat-message', ({ room, message }) => {
        io.to(room).emit('chat-message', message);
    });

    socket.on('offer', ({ room, offer }) => {
        socket.to(room).emit('offer', offer);
    });

    socket.on('answer', ({ room, answer }) => {
        socket.to(room).emit('answer', answer);
    });

    socket.on('ice-candidate', ({ room, candidate }) => {
        socket.to(room).emit('ice-candidate', candidate);
    });

    socket.on('disconnect', () => {
        if (socket.room) {
            const roomUsers = rooms.get(socket.room);
            if (roomUsers) {
                roomUsers.delete(socket.id);
                if (roomUsers.size === 0) {
                    rooms.delete(socket.room);
                } else {
                    io.to(socket.room).emit('user-left', socket.name);
                }
            }
        }
        console.log('Client disconnected:', socket.id);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 