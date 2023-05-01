const Message = require("../models/Message")
const Room = require("../models/Room");
const User = require("../models/User");

class messageController {
    async sendMessage(req, res) {
        try {
            const { text } = req.body
            const { id } = req.user
            const { room } = req.params;

            const message = new Message({ message: text, author: id, room })

            await message.save()
            res.status(200).json({ message: 'Message send!' })
        } catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    }

    async createRoom(req, res) {
        try {
            const { id } = req.user
            const { name, user } = req.body

            const firstUser = await User.findById(id)
            const secondUser = await User.findById(user)

            if (!firstUser || !secondUser) {
                res.status(400).json({ message: 'User not found' })
            }

            const room = new Room({ name, users: [id, user] })

            firstUser.current_rooms = [...firstUser.current_rooms, room._id]
            secondUser.current_rooms = [...secondUser.current_rooms, room._id]

            await firstUser.save()
            await secondUser.save()

            const message = new Message({
                author: 'system',
                message: 'Room created!',
                room: room._id
            })

            await room.save()
            await message.save()

            res.status(200).json({
                room_id: room._id,
                message: `Room "${name}" created`,
                user: secondUser
            })
        } catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    }

    async deleteRoom(req, res) {
        try {
            const { id: userId } = req.user
            const { room: roomId } = req.params

            const room = await Room.findById(roomId)

            if (!room) {
                res.status(404).json({ message: 'Room not found!' })
            }

            if (!room.users.includes(userId)) {
                res.status(400).json({ message: `It's not your room!` })
            }

            room.users.forEach(async user => {
                const candidate = await User.findById(user._id)

                candidate.current_rooms = candidate.current_rooms.filter(item => item != id)

                await candidate.save()
            })

            await room.deleteOne()

            res.status(200).json({ message: `Room ${id} deleted` })
        } catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    }

    async getMessagesRoom(req, res) {
        try {
            const { room } = req.params

            const messages = await Message.find({ room })

            res.status(200).json({ messages })
        } catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    }

    async getLastMessageRoom(req, res) {
        try {
            const { room } = req.params

            const message = await Message.findOne({ room }).sort({ created_at: -1 })

            res.status(200).json(message)
        } catch (error) {
            res.status(400).json(error)
        }
    }

    async getCurrentRooms(req, res) {
        try {
            const { id } = req.user

            const rooms = await User.findById(id).select('current_rooms')

            res.status(200).json(rooms)
        } catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    }

    async getOneRoom(req, res) {
        try {
            const { id: user } = req.user
            const { id } = req.params

            const room = await Room.findById(id)

            const secondUserId = room.users.filter(roomMate => roomMate != user)
            const secondUser = await User.findById(secondUserId)

            if (!room) {
                res.status(400).json({ message: 'Room not found' })
            }

            res.status(200).json({ room: room, user: secondUser })
        } catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    }
}

module.exports = new messageController()