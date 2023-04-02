const { Schema, model } = require('mongoose')

const Message = new Schema({
    author: { type: Schema.Types.Mixed, ref: 'User' },
    message: { type: String },
    room: { type: Schema.Types.ObjectId, ref: 'Room' },
    created_at: { type: Date, default: Date.now }
})

module.exports = model('Message', Message)