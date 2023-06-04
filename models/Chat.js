const mongoose = require("mongoose")
const {Schema} = mongoose.Schema

const Chat = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref :"users"
        
    },
    name:{
        type:"String",
        required:true
    },
    email:{
        type:"String",
        required:true
    },
    message:{
        type:"String",
        required:true
    },
})

module.exports = mongoose.model('AllChat',Chat)