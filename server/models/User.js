const { Schema, model } = require('mongoose')

const User = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    image: {type: String, required: false},
    current_rooms: [{type: Schema.Types.ObjectId, ref: 'Room'}],
    last_active: {type: Date, required: false, default: null}
})

module.exports = model('User', User)