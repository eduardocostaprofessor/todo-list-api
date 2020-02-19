const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')


/**
 * @typedef Imc
 * @property {string} name
 * @property {string} weight - XPTOOOO
 * @property {string} height - XPTOOOO
 */
const UserSchema = new mongoose.Schema({
    nome : {
        type : String,
        required : true
    },
    peso : {
        type : Number,
        required : true
    },
    altura : {
        type: Number,
        required : true
    },
    IMC : {
        type: Number,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now()
    }
})

UserSchema.plugin(mongoosePaginate)
mongoose.model('Imc', UserSchema)