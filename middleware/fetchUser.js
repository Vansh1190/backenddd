const JWT = require("jsonwebtoken")
const User = require("../models/User")

require("dotenv").config()

const fetchUser = (req,res,next)=>{
    // Get user data from JWT Token and Login it 
    const token = req.header("AuthToken")
    
    if(!token){
        return res.status(401).send({Error: "Access denied USER NOT LoggedIn"})
    }
    else{
        JWT.verify(token,process.env.JWT_secret,(err,result)=>{
            if(err){
                res.send(err.message)
                return 
            }
            else{
                  // we need to replace ' " ' that because it is giving an error.
                User.findById(result).then((data)=>{
                    req.user = data;
                    next();
                }).catch((err)=>{
                    console.log("Error",err.message)
                })
               
            }
        })
    }

}


module.exports = fetchUser;
