const messageController = require("./controllers/messageController");
const Message = require("./models/Message");
const Room = require("./models/Room")

function initSocket(io) {
    io.on('connection', socket => {
        console.log('user connected');

        socket.on('disconnect', () => {
            console.log('user disconnected');
        });

        socket.on('joinRoom', roomName => {
            socket.join(roomName);
            console.log(`User ${socket.id} joined room ${roomName}`);
        });

        socket.on('leaveRoom', roomName => {
            socket.leave(roomName);
            console.log(`User ${socket.id} left room ${roomName}`);
        });

        socket.on('sendMessage', ({ text, room_id, user_id }) => {
            const message = new Message({ text, user_id, room_id });
            message.save((err, savedMessage) => {
                if (err) {
                    console.log(err);
                } else {
                    io.to(room_id).emit('message', savedMessage);
                }
            });
        });

        socket.on('createRoom', roomName => {
            try {
                const room = new Room({ name: roomName });
                room.save()
                socket.join(roomName);
                console.log(`User ${socket.id} created room ${roomName}`);
            } catch (error) {
                console.log(err)
            }
        });
    });
}

module.exports = initSocket;