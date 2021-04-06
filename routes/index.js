let express = require('express');
let router = express.Router();
let jwt = require("jsonwebtoken")
let surveyItem = require("../model/surveyModel")
let mongoose = require("mongoose");
const { request } = require('express');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Coders' });
});

function verifyToken(req,res,next){
  if(!req.headers.authorization){
    return res.status(401).send("Unauthorized request")
  }else{
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null'){
      return res.status(401).send("Unauthorized request")
    }else{
      let payload = jwt.verify(token, 'secretKey')
      if(!payload){
        return res.status(401).send("Unauthorized request")
      }else{
        req.userId = payload.subject
        next()
      }
    }
  }
}


//getting info from db
router.get("/survey", (req,res)=>{
  surveyItem.find((err,item)=>{
    if(err){
      console.log(err);
    }
    else{
      res.json(item);
      }
  })
})

//add
router.post("/add",verifyToken, (req,res)=>{
  let newsurveyItem = new surveyItem({
    surveyName: req.body.surveyName,
    option1: req.body.option1,
    option2: req.body.option2
  })
  newsurveyItem.save((err,item)=>{
    if(err){
      res.json(err)
    }else{
      res.json({message:"Survey Added"})
    }
  })
})

//update
router.post("/update/:id",verifyToken, (req, res)=>{
  let id = mongoose.Types.ObjectId(req.params.id)
  surveyItem.findOneAndUpdate({_id: id},{
    $set:{
      surveyName : req.body.surveyName,
      option1 : req.body.option1,
      option2: req.body.option2
    }
  },(err,result)=>{
    if(err){
      res.json(err)
    }else{
      res.json(result)
    }
  })
})

//get Survey By ID
router.get("/edit/:id",(req,res)=>{
  let id = mongoose.Types.ObjectId(req.params.id)
  surveyItem.findById(id, (err,item)=>{
    res.json(item)
  })
})

//delete
router.delete("/delete/:id",verifyToken, (req,res)=>{
  let id = mongoose.Types.ObjectId(req.params.id)
  surveyItem.remove({_id: (id)}, (err,result)=>{
    if(err){
      res.json(err)
    }else{
      res.json(result)
    }
  })
})


module.exports = router;
