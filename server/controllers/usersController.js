const User = require('../models/User')

class usersController {
    async registration(req, res){
        try {
            
        } catch (error) {
            
        }
    }
    async login(req, res){
        try {
                    
        } catch (error) {
            
        }
    }
    async allUsers(req, res){
        try {
            const users = await User.find()
            res.status(400).json(users)
        } catch (error) {
            res.status(200).json('Error getting users!')
        }
    }
}

module.exports = new usersController()