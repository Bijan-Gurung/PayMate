const User = require('../model/user')
const bcrypt = require('bcrypt')
const saltRounds = 10
const jwt = require('jsonwebtoken')


 const registerNewUser=  async (req,res)=>{
  const hashPassword = await bcrypt.hash(req.body.password, saltRounds)
  req.body.password = hashPassword
      console.log(hashPassword)
    const data = await User.create(req.body)
    if(data) {
      res.json({
        msg: "registration succes"
      })
    }
  }

 
 const loginUser=  async (req,res)=>{
 console.log(req.body)
  const data = await User.findOne({phoneNumber: req.body.phoneNumber})
  const isMatched = await bcrypt.compare(req.body.password, data.password)
  console.log(isMatched)
  const token = jwt.sign({phoneNumber: req.body.phoneNumber}, process.env.SECRET_KEY)
  console.log(token)
  if(data){
    res.json({
    isLoggedIn: true,
    msg:  "success",
    id: data._id,
    token: token
    })
  }else{
    res.json({
      isLoggedIn: false,
      msg: "user doesnnot exist"
    })
  }

}


const getAllUser =  async (req,res)=>{
   const data = await User.find()
   if(data){
     res.json({
     userList: data
     })
   }
 }

 const getUserDetailsById = async (req,res)=>{
   const data = await User.findById(req.params.id)
   if(data){
     res.json({
     userList: data
     })
   }
 }
 
  module.exports = {registerNewUser,loginUser,getAllUser,getUserDetailsById}