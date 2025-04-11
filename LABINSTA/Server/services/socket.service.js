const { Server } = require('socket.io');
let io;

const initSocketInstance = (httpServer) => {
    io = new Server(httpServer);
    io.on('connection', (socket) => {
        console.log('A user connected');
        
        socket.on('disconnect', () => {
            console.log('User disconnected');
        });
        
        // You can add additional socket event handlers here
        socket.on('new-post', (data) => {
            // Broadcast new post to all connected clients
            io.emit('post-added', data);
        });
    });

    return io;
};

const getSocketInstance = () => {
    return io;
};

module.exports = {
    initSocketInstance,
    getSocketInstance
};