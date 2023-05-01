const tokenService = require('../service/token-service.js')

module.exports = function (req, res, next) {
    try {
        const accessToken = req.cookies.accessToken;

        if (!accessToken) {
            return next(res.status(400).json({ message: "User not authorized" }))
        }

        const userData = tokenService.validateAccessToken(accessToken)
        
        if (!userData) {
            return next(res.status(400).json({ message: "Wrong token" }))
        }

        req.user = userData;
        next()
    } catch (error) {
        return next(console.log(error))
    }
}