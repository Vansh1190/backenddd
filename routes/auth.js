const express = require ("express")
const router = express.Router();
const User = require("../models/User")

router.get('/',(req,res)=>{
res.send("HEllo this is AUTH PAGE")
})


router.post('/reg',(req,res)=>{
    console.log(req.body)
    const user = User(req.body);
    user.save()
    .then((e)=>{
        console.log("Account Created",e)
        res.send({'Account Created':"true"
        } )
    }).catch((e)=>{
       res.send({"ERRor":"erro occured",
       "error info":e})
       console.log("Error",e)
    })
})

// Creating user using Post Request 
router.post('/', (req,res)=>{
    res.send(
        "Fetched Successfully"
    )
})



module.exports = router