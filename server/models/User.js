const { Schema, model } = require('mongoose')

const User = new Schema({
    username: {type: String, required: true},
    password: {type: String, require: true},
    email: {type: String, require: true, unique: true},
    image: {type: String, require: false},
    current_rooms: [{type: Schema.Types.ObjectId, ref: 'Room'}]
})

module.exports = model('User', User)