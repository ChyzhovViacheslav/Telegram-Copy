const Router = require('express')
const router = new Router()
const controller = require('../controllers/usersController')
const { check } = require('express-validator')
const authMiddleware = require('../middleware/auth-middleware')
const multer = require('multer')
const path = require('path')

const upload = multer({
    storage: multer.diskStorage({
      destination: path.resolve('server', 'images'),
      filename: (req, file, cb) => {
        cb(null, Date.now() + '.png');
      }
    })
  });

router.get('/users', authMiddleware, controller.allUsers)
router.post('/login', controller.login)
router.post('/register', [
    check('username', `Username cannot be empty`).notEmpty(),
    check('password', `Password must be more than 4 and less than 30 characters`).isLength({ min: 4, max: 30 }),
    check('email', `Mail must not be empty`).notEmpty()
], controller.registration)
router.get('/logout', controller.logout)
router.get('/refresh', controller.refreshToken)
router.get('/user/:id', controller.getOneUser)
router.put('/image/:id', upload.single('image'), controller.changeUserPhoto)
router.put('/info', controller.changeUserInfo)

module.exports = router