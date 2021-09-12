const mongoose = require('mongoose');

const User = new mongoose.Schema({
    profileURL: {
        type: String,
    },
    name:{
        type: String,
        required: true
    },
    position:{
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    education: {
        type: String
    }
    ,
    skills:{
        type: String
    },
    Birthday: {
        type: String
    },
    Socials: [String],
    tags: [String]
})

const UserModel = mongoose.model('TechConnect_User', User);
module.exports = UserModel;