const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')


/**
 * @typedef User
 * @property {string} name
 * @property {string} user - XPTOOOO
 * @property {string} password - XPTOOOO
 */
const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    user : {
        type : String,
        required : true
    },
    password : {
        type: String,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now()
    }
})

UserSchema.plugin(mongoosePaginate)
mongoose.model('User', UserSchema)