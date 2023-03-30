const messageController = require("./controllers/messageController");
const Message = require("./models/Message");
const Room = require("./models/Room")

function initSocket(io) {
    io.on('connection', socket => {
        console.log('user connected');

        socket.on('joinRoom', ({room_id}) => {
            socket.join(room_id);
            console.log(`User ${socket.id} joined room`);
        });

        socket.on('sendMessage', async ({ text, room_id, user_id }) => {
            const message = new Message({
                author: user_id,
                message: text,
                room: room_id
            });

            await message.save();

            io.to(room_id).emit('newMessage', message);
        });

        socket.on('getMessages', async ({ room_id }) => {
            const messages = await Message.find({ room: room_id })

            socket.emit('allMessages', messages)
        })

        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    });
}

module.exports = initSocket;