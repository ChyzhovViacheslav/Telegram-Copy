const Message = require("./models/Message");
const User = require("./models/User");

function initSocket(io) {
    io.on('connection', socket => {

        socket.on('setOnline', async ({ user_id }) => {
            const user = await User.findById(user_id)
            user.last_active = null
            await user.save()
        })

        socket.on('setOffline', async ({ user_id }) => {
            const user = await User.findById(user_id)
            user.last_active = new Date()
            await user.save()
        })

        socket.on('getLastActive', async ({ user_id }) => {
            const last_active_user = await User.findById(user_id).select('last_active')
    
            socket.emit('onlineUser', last_active_user.last_active)  
        })

        socket.on('joinRoom', ({ room_id }) => {
            socket.join(room_id);
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

        socket.on('getMessages', async ({ room_id, limit = 50 }) => {
            const allMessages = await Message.countDocuments({ room: room_id })
            const messages = await Message
                .find({ room: room_id })
                .skip(allMessages <= limit ? 0 : allMessages - limit)
                .limit(limit)

            socket.emit('allMessages', messages)
        })

        socket.on('disconnect', () => {
        });
    });
}

module.exports = initSocket;