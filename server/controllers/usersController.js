const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')
const { secret } = require('../config.js')
const tokenService = require('../service/token-service')
const UserDto = require('../dtos/user-dto.js')

class usersController {
    async registration(req, res) {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({ message: 'Registration error!', errors })
            }

            const { username, email, password } = req.body

            const candidate = await User.findOne({ email })

            if (candidate) {
                return res.status(400).json({ message: 'User with this email already exist!' })
            }

            const hasPass = bcrypt.hashSync(password, 7)

            const defaultAvatar = null

            const user = await User.create({
                email,
                username,
                image: defaultAvatar,
                password: hasPass
            })

            const userDto = new UserDto(user);
            const tokens = tokenService.generateTokens({ ...userDto })
            await tokenService.saveToken(userDto.id, tokens.refreshToken);

            res.cookie(
                'refreshToken',
                tokens.refreshToken,
                { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })

            return res.status(200).json({
                ...tokens,
                user: userDto
            })

        } catch (error) {
            console.log(error)
        }
    }
    async login(req, res) {
        try {
            const { email, password } = req.body

            const user = await User.findOne({ email })

            if (!user) {
                return res.status(400).json({ message: 'User not found!' })
            }

            const validPass = bcrypt.compare(password, user.password)

            if (!validPass) {
                return res.status(400).json({ message: 'Wrong password!' })
            }

            const userDto = new UserDto(user);
            const tokens = tokenService.generateTokens({ ...userDto })
            await tokenService.saveToken(userDto.id, tokens.refreshToken);

            res.cookie(
                'refreshToken',
                tokens.refreshToken,
                { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true }
            )

            res.cookie(
                'accessToken',
                tokens.accessToken,
                { maxAge: 60 * 60 * 24 * 7, httpOnly: true }
            )
            
            return res.status(200).json({
                ...tokens,
                user: userDto
            })
        } catch (error) {
            res.status(400).json({ error })
        }
    }

    async logout(req, res) {
        try {
            const { refreshToken } = req.cookies;
            const token = await tokenService.removeToken(refreshToken)
            res.clearCookie('refreshToken')
            return res.json(token)
        } catch (error) {
            console.log(error)
        }
    }

    async allUsers(req, res) {
        try {
            const users = await User.find()
            res.status(400).json(users)
        } catch (error) {
            res.status(200).json('Error getting users!')
        }
    }

    async refreshToken(req, res) {
        try {
            const { refreshToken } = req.cookies;

            if (!refreshToken) {
                return res.status(400).json({ message: 'Wrong token!' })
            }

            const userData = tokenService.validateRefreshToken(refreshToken)
            const tokenFromDb = await tokenService.findToken(refreshToken)

            if (!tokenFromDb || !userData) {
                return res.status(400).json({ message: 'Token not found!' })
            }

            const user = await User.findById(userData.id);
            const userDto = new UserDto(user);
            const tokens = tokenService.generateTokens({ ...userDto })
            await tokenService.saveToken(userDto.id, tokens.refreshToken);

            res.cookie(
                'refreshToken',
                tokens.refreshToken,
                { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })

            return res.status(200).json({
                ...tokens,
                user: userDto
            })

        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new usersController()