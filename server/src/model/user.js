const mongoose= require('mongoose')

const userSchema =  new mongoose.Schema({
  email: {type: String}, 
  password:  {type: String}, 
  phoneNumber: {type: String}, 
  status:{type:String,default:'pending'},
  });
  const User = mongoose.model('User', userSchema);

  
module.exports = User