const Router = require('express')
const router = new Router()
const controller = require('../controllers/messageController')
const authMiddleware = require('../middleware/auth-middleware')

router.post('/room', controller.createRoom)
router.post('/:room/messages', controller.sendMessage)
router.get('/:room', controller.getMessagesRoom)

module.exports = router