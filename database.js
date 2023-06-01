const mongoose = require("mongoose");
const mongoURI = 'mongodb+srv://vansh:vansh@cluster0.aubleqa.mongodb.net/'



const connectToMongo =async ()=>{
    mongoose.connect(mongoURI).then(()=>{
        console.log("connected");
    })
}

module.exports  = connectToMongo;