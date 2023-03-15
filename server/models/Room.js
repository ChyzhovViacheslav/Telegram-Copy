const { Schema, model, Mongoose } = require('mongoose')
const Message = require('./Message')

const Room = new Schema({
    name: { type: String },
    created_at: { type: Date, default: Date.now }
})

module.exports = model('Room', Room)