const { body, matchedData ,validationResult} =  require('express-validator');
const express = require ("express");

const Chat = require('../models/Chat');
const fetchUser = require('../middleware/fetchUser');
const router = express.Router();


router.get("/",  fetchUser ,async(req,res)=>{
    res.send("This is GlobalChat Page")
    console.log(req.body)
})

router.post("/send",fetchUser, async(req,res)=>{
    const UserData = req.user;
    
    const NewMsg = new Chat(req.body);
    NewMsg.name = UserData.name
    NewMsg.email = UserData.email
    NewMsg.user = UserData.id
    NewMsg.message = req.body.message

    console.log(NewMsg)

        NewMsg.save().then((E)=>{
            return res.status(200).send("Message Sent")
        }).catch((err)=>{
            console.log("ERror", err.message);
            return res.send({Error:err.message})
        })
    
    // const result = validationResult(req);
})

module.exports = router