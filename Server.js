const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

io.on('connection', socket => {
  socket.on('join room', roomID => {
    const room = io.sockets.adapter.rooms.get(roomID);
    const numClients = room ? room.size : 0;
    
    if (numClients === 0) {
      socket.join(roomID);
    } else if (numClients === 1) {
      socket.join(roomID);
      socket.to(roomID).emit('user joined', socket.id);
    } else {
      socket.emit('room full');
    }
  });

  socket.on('sending signal', payload => {
    io.to(payload.userToSignal).emit('user joined', { 
      signal: payload.signal, 
      callerID: payload.callerID 
    });
  });

  socket.on('returning signal', payload => {
    io.to(payload.callerID).emit('receiving returned signal', {
      signal: payload.signal,
      id: socket.id
    });
  });

  socket.on('message', ({ roomId, message }) => {
    io.to(roomId).emit('message', message);
  });

  socket.on('disconnect', () => {
    socket.broadcast.emit('user left', socket.id);
  });
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));