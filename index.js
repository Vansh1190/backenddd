const connectToMongo = require('./database')
const mongoose = require("mongoose")
const express = require('express')
const cors=require("cors");

connectToMongo()

const app = express()
const port = 3000


const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

app.use(cors(corsOptions))

app.get('/',(req,res)=>{
    res.send("Welcome to VNOTE APP")
})

app.use(express.json())  //This express.json act as an interface 

app.use("/api/auth",require('./routes/auth'))
app.use("/api/notes",require('./routes/notes'))
app.use("/api/vansh",require('./routes/Vansh'))





app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`)
})
app.put('/send',(req,res)=>{

})

// const Cat = mongoose.model('Cat', { name: String });


// const kitty = new Cat({ name: 'Zildjiaddddn' });
// kitty.save().then(() => console.log('meow'));
