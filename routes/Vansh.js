const express = require("express")
const route = express.Router();

route.get('/',(req,res)=>{
    obj = {
        Name:"Vansh",
        Status:"Accessed successfully"
    }
    res.send(obj)
    console.log("VANSH has Accessed the Route")
})

module.exports = route