const mongoose = require("mongoose");
const {Schema} = mongoose

const NewSchem = new Schema({
    name:{
        type:"String",
        unique:true
    },
    email:{
        type:"String",
        unique:true

    }
})

module.exports = mongoose.model("NewScma",NewSchem);
