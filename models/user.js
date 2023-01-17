var mongoose = require("mongoose");
var schema = mongoose.Schema;

const userSchema = new schema({
    username:String,
    password:String,
    email:String,
    fullName:String,
    firstName:String,
    lastName:String,
    message:String,
    notes:[],
    friends:[]
},{timestamps:true})

const User = mongoose.model('User',userSchema)



module.exports = User;