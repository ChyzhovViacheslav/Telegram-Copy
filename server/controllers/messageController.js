const { createKey } = require("next/dist/shared/lib/router/router");
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

            const users = [id, user]

            const room = new Room({ name, users })

            users.forEach(async user => {
                const candidate = await User.findById(user)

                if (!candidate) {
                    res.status(400).json({ message: 'User not found' })
                }

                candidate.current_rooms = [...candidate.current_rooms, room._id]

                await candidate.save()
            })

            await room.save()
            res.status(200).json({ message: `Room "${name}" created` })
        } catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    }

    async deleteRoom(req, res) {
        try {
            const { id: userId } = req.user
            const { id } = req.params


            const room = await Room.findById(id)

            if (!room.users.includes(userId)) {
                res.status(400).json({ message: `It's not your room!` })
            }

            room.users.map(async user => {
                const candidate = await user.findById(user._id)

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

    async assignRoom(req, res) {
        try {
            const { id } = req.user
            const { room } = req.params

            const user = await User.findById(id)

            user.current_rooms = [...user.current_rooms, room]

            await user.save()

            res.status(200).json(user.current_rooms)
        } catch (error) {
            res.status(400).json(error)
        }
    }

    async untieRoom(req, res) {
        try {
            const { id } = req.user
            const { room } = req.params

            const user = await User.findById(id)

            user.current_rooms = user.current_rooms.filter(item => item != room)

            await user.save()

            res.status(200).json(user.current_rooms)
        } catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    }

    async getOneRoom(req, res) {
        try {
            const { id } = req.params

            const room = await Room.findById(id)

            if(!room){
                res.status(400).json({message: 'Room not found'})
            }

            res.status(200).json(room)
        } catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    }
}

module.exports = new messageController()