const Router = require('express')
const router = new Router()
const controller = require('../controllers/messageController')
const authMiddleware = require('../middleware/auth-middleware')

router.post('/room', authMiddleware, controller.createRoom)
router.post('/send/:room', authMiddleware, controller.sendMessage)
router.get('/messages/:room', authMiddleware, controller.getMessagesRoom)
router.get('/last/:room', authMiddleware, controller.getLastMessageRoom)
router.delete('/delete/:room', authMiddleware, controller.deleteRoom)
router.get('/rooms', authMiddleware, controller.getCurrentRooms)
router.get('/room/:id', authMiddleware, controller.getOneRoom)

module.exports = router