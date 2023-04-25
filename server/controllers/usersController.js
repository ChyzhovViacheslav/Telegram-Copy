const User = require('../models/User')
const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator')
const tokenService = require('../service/token-service')
const UserDto = require('../dtos/user-dto.js')
const { createLogo } = require('../service/create-logo-service')

class usersController {
    async registration(req, res) {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({ message: 'Registration error!', errors })
            }

            const { username, email, password, firstname, lastname } = req.body

            const candidateEmail = await User.findOne({ email })
            const candidateUsername = await User.findOne({ username })

            if (candidateEmail || candidateUsername) {
                return res.status(400).json({ message: 'User with this email or username already exist!' })
            }

            if (!firstname || firstname.length < 3) {
                return res.status(400).json({ message: 'First Name must not be less than 3 characters' })
            }

            const hashPass = bcrypt.hashSync(password, 7)

            const user = await User.create({
                email,
                username,
                images: [createLogo(username)],
                password: hashPass,
                firstname,
                lastname
            })

            const userDto = new UserDto(user);
            const tokens = tokenService.generateTokens({ ...userDto })
            await tokenService.saveToken(userDto.id, tokens.refreshToken);

            res.cookie(
                'refreshToken',
                tokens.refreshToken,
                { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true }
            )

            return res.status(200).json({
                ...tokens,
                expiresAt: new Date(new Date().getTime() + 30 * 60 * 1000),
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

            return res.status(200).json({
                ...tokens,
                expiresAt: new Date(new Date().getTime() + 30 * 60 * 1000),
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
                user: userDto,
                expiresAt: new Date(new Date().getTime() + 30 * 60 * 1000)
            })

        } catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    }

    async getOneUser(req, res) {
        try {
            const { id } = req.params

            const user = await User.findById(id)

            if (!user) {
                res.status(400).json({ message: 'User not found' })
            }

            res.status(200).json(user)
        } catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    }

    async changeUserPhoto(req, res) {
        try {
            const { id } = req.params
            const image = req.file
            if (!image) {
                res.status(400).json({ message: 'Image not found' })
            }

            const user = await User.findById(id)

            user.images = [image.filename, ...user.images]

            await user.save()

            res.status(200).json({ image: image.filename, message: 'Image uploaded' })
        } catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    }

    async changeUserInfo(req, res) {
        try {
            const { id, username, firstname, lastname, bio } = req.body

            const user = await User.findById(id)

            if (!firstname || firstname.length < 3) {
                return res.status(400).json({ message: 'First Name must not be less than 3 characters' })
            }

            if (!username || username.length < 5) {
                return res.status(400).json({ message: 'Username must not be less than 5 characters' })
            }

            user.firstname = firstname
            user.lastname = lastname
            user.username = username.toLowerCase()
            user.bio = bio

            await user.save()

            res.status(200).json({ message: 'User info was updated' })
        } catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    }

    async searchUsers(req, res) {
        try {
            const { username } = req.params
            
            const regexpTerm = new RegExp(`^${username}`, 'i')

            const users = await User.find({username: regexpTerm})

            res.status(200).json(users)
        } catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    }
}

module.exports = new usersController()