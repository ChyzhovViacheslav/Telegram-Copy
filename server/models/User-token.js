const {Schema, model} = require('mongoose')

const UserToken = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    refreshToken: {type: String, require: true}
})

module.exports = model('Token', UserToken)