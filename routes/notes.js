const express = require("express")
const router = express.Router()


router.get('/',(req,res)=>{
    console.log("Notes");
    obj =  []
    res.json(obj)
})

// app.get('/api/v1/signup',(req,res)=>{
//     console.log("Signup");
//     res.send({
//         stats:"Signup",
//         yes:"Signup now"
//     })
// })

module.exports = router