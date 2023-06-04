const express = require ("express")
const router = express.Router();
const User = require("../models/User");
const mongoose = require("mongoose")
const NewSchem = require("../models/NewSchem");
const {body,validationResult } = require("express-validator")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetchUser = require("../middleware/fetchUser");
require('dotenv').config();
const JWT_Secret = process.env.JWT_secret

router.get('/',(req,res)=>{
res.send("HEllo this is AUTH PAGE")
// var decoded = jwt.verify(c2, JWT_Secret);
// console.log(decoded) // bar

})


router.post('/reg',async (req,res)=>{
    // console.log(req.body)
    const saltRounds = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, saltRounds)
    console.log(req.body.password)
    const user = User(req.body);

    user.save()
    .then((e)=>{
        console.log("Account Created",e)
        res.send({'Account Created':"true"
        } )
    }).catch((e)=>{
        console.log("Error",e)
       res.send({"ERRor":"erro occured",
       "error info":e})
    })
})
router.post("/login",(req,res)=>{
    User.findOne({email:req.body.email}).then((Userdata)=>{
        if(Userdata){
            const TOKEN = jwt.sign(JSON.stringify(Userdata._id), JWT_Secret)
            bcrypt.compare(req.body.password,Userdata.password).then((e)=>{  
                if(e){
                    // console.log({"Token":TOKEN});
                    // jwt.verify(TOKEN, 'Vanh1190' , (err,decoded)=>{
                        // if(err){
                        //     console.log(err.message);
                        //     return 
                        // }
                        // else{
                           return res.status(200).send({ Status:200,Message:"Log in Successfull",  UserID: Userdata._id , AuthToken:TOKEN})
                        // }
                    // })
                }
                else{
                    res.status(400).send("email or password is invalid.")
                }
            })
        }
            else{
                res.status(400).send({Status:400,Message:"no user found",UserObj:req.body})
            }
    })
})

router.post("/getUser",fetchUser, async(req,res)=>{
    // const LocalStorageAuthTOKEN = "dddd"
    const data = await req.user;
    res.send(data);
    // if(LocalStorageAuthTOKEN){

    // }
    // else{
        
    // }
})


// Creating user using Post Request 
router.post('/', (req,res)=>{
    res.send(
        "Fetched Successfully"
    )
})



module.exports = router