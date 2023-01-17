const express = require('express')
var cors = require('cors')
var mongoose = require('mongoose')
var bodyParser =require('body-parser')
var Cookies = require('universal-cookie')
var User = require('./models/user')
const app = express()
const port = 8080
const uri = "mongodb+srv://shalom:SH%40lom%26g0d@shtrangy.odwft.mongodb.net/Shtrangy?retryWrites=true&w=majority";
const options = { useNewUrlParser: true, useUnifiedTopology: true }
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());


mongoose.connect(uri,options)
  .then((result)=>{
    console.log("connected");
    app.listen(port);
  })
  .catch((err)=>{
    console.log("failed : "+err)
  })
//---- createAccount route---
app.post('/api/createAccount', (req, res) => {
  const {firstName, lastName, username, password} = req.body;
//setting the mongoose model
  const user = new User({  
    username,
    password,
    firstName, 
    lastName
  });  

//checking if user already exists
  User.find({ username })
    .then((docs)=> {
      if (docs.length == 0){ 
        //creating new user    
        user.save().then((data)=>{res.send(data.firstName + " created successfully")})
      }
      else{
        res.send("User already exists..!")
      }
    })
})


//---- Login route ----
app.post('/api/login',(req,res)=>{
  const cookies = new Cookies(req.headers.cookie);
  const {username, password} = req.body;
  const isAuthenticated=true, oauthToken=100;
  User.find({username}).then((docs)=>{
    if((docs.length != 0) && (docs[0].password == password)){
      cookies.set('myCat', 'Pacman', { path: '/' });
      res.send({isAuthenticated,oauthToken});
    }
    else{
      res.send("invalid credentials")
    }
  })
})

app.post('/api/upload',(req,res)=>{
  res.send(req.body)
  
  const user = new User({  
    profilePicture: {
      data: req.files,
      contentType: 'image/png'
  }
  });
  //user.save().then((data)=>{res.send(" uploaded successfully")})

})
