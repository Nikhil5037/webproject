let express = require('express');
let router = express.Router();
let jwt = require("jsonwebtoken")
let mongoose = require("mongoose")
let User = require("../model/userModel")
let cors = require("cors")

let app = express()
app.use(cors())
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//register User 
router.post("/register", (req, res)=>{
  let userData = req.body
  let user = new User(userData)
  user.save((err,regUser)=>{
    if(err){
      console.log(err)
    }else{
      let payload = {subject:regUser._id}
      let token = jwt.sign(payload, "secretKey")
      regUser.token = {token:token}
      res.send({token})
      
      //console.log("User Added")
    }

  })
})

//Login User
router.post("/login", (req,res)=>{
  let userData = req.body
  User.findOne({email:userData.email},(err,user)=>{
    if(err){
      console.log(err)
    }else{
      if(!user){
        console.log("No User Found")
      }else{
        if(user.password != userData.password){
          console.log("Password Incorrect")
        }else{
          
          //let payload = {subject:user._id}
          //let token = jwt.sign(payload, "secretKey")
          let token = user.token
          res.send({token})
        }
      }
    }
  })
})

module.exports = router;
