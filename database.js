const mongoose = require("mongoose");
require('dotenv').config();

const mongoURI = process.env.MongoDB_URI



const connectToMongo =async ()=>{
    mongoose.connect(mongoURI).then(()  =>{
        console.log("connected");
    }).catch((E)=>{
        console.log(E);
    })
}

module.exports  = connectToMongo;