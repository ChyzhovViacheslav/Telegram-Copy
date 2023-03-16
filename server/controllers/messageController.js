const { createKey } = require("next/dist/shared/lib/router/router");
const Message = require("../models/Message")
const Room = require("../models/Room")

class messageController {
    async sendMessage(req, res) {
        try {
            const { text } = req.body
            const { id } = req.user
            const { room } = req.params;

            const message = new Message({ message: text, author: id, room })

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

            res.json({ messages })
        } catch (error) {
            console.log(error)
        }
    }

    async getLastMessageRoom(req, res) {
        try {
            const { room } = req.params

            const message = await Message.findOne({ room }).sort({ created_at: -1 })

            res.json(message)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new messageController()