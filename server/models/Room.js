const { Schema, model } = require('mongoose')

const Room = new Schema({
    name: { type: String, required: true },
    users: [{type: Schema.Types.ObjectId, required: true}],
    created_at: { type: Date, default: Date.now }
})

module.exports = model('Room', Room)