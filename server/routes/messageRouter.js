const Router = require('express')
const router = new Router()
const controller = require('../controllers/messageController')
const authMiddleware = require('../middleware/auth-middleware')

router.post('/room', authMiddleware, controller.createRoom)
router.post('/:room/messages', authMiddleware, controller.sendMessage)
router.get('/:room', authMiddleware, controller.getMessagesRoom)
router.get('/:room/last', authMiddleware, controller.getLastMessageRoom)

module.exports = router