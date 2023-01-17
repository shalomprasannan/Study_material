
var mangoose= require('mongoose');
var User = require("./models/user.js")
const uri = "mongodb+srv://shalom:SH%40lom%26g0d@shtrangy.odwft.mongodb.net/Shtrangy?retryWrites=true&w=majority";
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mangoose.connect(uri)
.then((result)=> {console.log("connected to db");})
.catch((err)=>{console.log("failed"+err)});

const user = new User({
    title :"Shalom",
    post : "My First post"
})

user.save()
    .then((result)=>{
        console.log(result);
    })
    .catch((err)=>{
        console.log(err);
    })