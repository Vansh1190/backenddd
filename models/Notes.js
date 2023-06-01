const mongoose = require("mongoose")
const {Schema} = mongoose

const NotesSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    tags:{
        type:String,
        default:"General" 
    },
    Date:{
        type:Date,
        default:Date.now,
        require:true

    }
})

module.exports = mongoose.model("Notes",NotesSchema)