let mongoose = require("mongoose")

let Schema = mongoose.Schema

let userSchema = new Schema({
    
    email:String,
    password:String,
    token:String
})

module.exports = user= mongoose.model('user', userSchema, 'users')