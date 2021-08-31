const mongoose = require('mongoose')
const Schema = mongoose.Schema

const newSchema1 = new Schema({
    email:String,
    password:String
})

module.exports = mongoose.model('User',newSchema1)