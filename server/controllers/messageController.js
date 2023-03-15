const Message = require("../models/Message")
const Room = require("../models/Room")

class messageController {
    async sendMessage(req, res) {
        try {
            const { text, author } = req.body
            const { room } = req.params;

            const message = new Message({ message: text, author, room })

            await message.save()
            res.json({ message: 'Message send!' })
        } catch (error) {
            console.log(error)
        }
    }

    async createRoom(req, res) {
        try {
            const { name } = req.body

            const room = new Room({ name })

            await room.save()
            res.json({ message: `Room "${name}" created` })
        } catch (error) {
            console.log(error)
        }
    }

    async getMessagesRoom(req, res) {
        try {
            const { room } = req.params

            const messages = await Message.find({ room })

            res.json({messages})
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new messageController()