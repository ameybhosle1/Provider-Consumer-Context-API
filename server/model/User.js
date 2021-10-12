const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    uname:{
        type:String
    },
    pass:{
        type:String
    }
})

const User = new mongoose.model('User',UserSchema)

module.exports = User;