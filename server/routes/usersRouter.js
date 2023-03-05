const Router = require('express')
const router = new Router()
const controller = require('../controllers/usersController')
const { check } = require('express-validator')
const authMiddleware = require('../middleware/auth-middleware')

router.get('/users', authMiddleware, controller.allUsers)
router.get('/login', controller.login)
router.post('/register', [
    check('username', `Username cannot be empty`).notEmpty(),
    check('password', `Password must be more than 4 and less than 30 characters`).isLength({ min: 4, max: 30 }),
    check('email', `Mail must not be empty`).notEmpty()
], controller.registration)
router.get('/logout', controller.logout)
router.get('/refresh', controller.refreshToken)

module.exports = router