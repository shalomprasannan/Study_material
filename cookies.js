const express = require("express");
var cors = require("cors");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var User = require("./models/user");
var Image = require("./models/image");
var multer=require("multer");
const Login=require("./controllers/login");

const bcrypt = require('bcrypt');
const saltRounds = 10;
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const uri =
  "mongodb+srv://shalom:SH%40lom%26g0d@Shtrangy.odwft.mongodb.net/Shtrangy_last?retryWrites=true&w=majority";
const app = express();
const port = 8081;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
var data;  //for sending response

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//connecting to Mongo DB
mongoose
  .connect(uri, options)
  .then((result) => {
    console.log("connected");
    app.listen(port);
  })
  .catch((err) => {
    console.log("failed : " + err);
  });

app.post("/api/login", async (req, res) => {
  //res.cookie("username", "shalom", {path:"/"})
  //destructuring input from cookies or body
  var { inputUsername, inputPassword } =
    req.body.inputUsername && req.body.inputPassword ? req.body : req.cookies;
    //validating user details and getting the user object
    const userDetails =await Login.login(inputUsername, inputPassword)
  
    if(userDetails){
      const { username, password, message } = userDetails;
      res.cookie("inputUsername", username, { path: "/", HTTPOnly: true });
      res.cookie("inputPassword", inputPassword);
      data = { username, message, isAuth: true };
    }
    else{
      let message = "invalid credentials";
      data = { message, isAuth: false };
    }
  res.send(data)
});

//logout route; clearing cookie and setting the flag
app.get("/api/logout", (req, res) => {
  res.clearCookie("inputUsername");
  res.clearCookie("inputPassword");
  data = { isAuth: false, message: "you've successfully logged out" };
  res.send(data);
});

app.post("/api/signup", async (req, res) => {
  var {
    createUsername,
    createPassword,
    createFullName,
    createEmail,
  } = req.body;

  var hashedPassword="";
  //setting the mongoose model
  await bcrypt.genSalt(saltRounds)
    .then(async salt => {
       hash = await bcrypt.hash(createPassword, salt)
      hashedPassword=hash
    });

  const user = new User({
    username: createUsername,
    password: hashedPassword,
    fullName: createFullName,
    email: createEmail,
  });

  //checking if user already exists
   User.find({ username : createUsername }).then(async (docs) => {
    if (docs.length == 0) {
      //creating new user
      await user.save().then((doc) => {
        data= {message : doc.username + " created successfully"}
      });
    } 
    else {
      data= {message : "User Already Exists"}
    }
    res.send(data);
  });
});


//have to rewrite all with functions as modules - separate validate function
app.get('/api/getmessage', (req, res)=>{
  var { inputUsername, inputPassword } =
    req.body.inputUsername && req.body.inputPassword ? req.body : req.cookies;

    User.find({ username: inputUsername }).then((docs) => {
      if (docs.length > 0 && docs[0].password === inputPassword) {
        data={ notes : [...docs[0].notes]}
      }else{
        data={message:"invalid creds..!"}
      }
      res.send(data)
    })
})

app.post('/api/savemessage', (req, res)=>{
  var { inputUsername, inputPassword } =
    req.body.inputUsername && req.body.inputPassword ? req.body : req.cookies;
    User.updateOne({username:inputUsername}, {$push: {notes:req.body.newMessage}})
    .then((doc)=>{
      res.send({added:true})
    })
})

app.post('/api/upload',upload.single('myFile'), async (req,res)=>{
  const image = new Image({ ...req.file });
  await image.save().then((doc) => {
    data= doc
  });
  //console.log(data)
  res.send(data)
})

app.get('/api/fetchFriends',(req,res)=>{
  const array = ["shalom","prasannan"]
  var { inputUsername, inputPassword } =
    req.body.inputUsername && req.body.inputPassword ? req.body : req.cookies;

    User.find({ username: inputUsername }).then((docs) => {
      if (docs.length > 0 && docs[0].password === inputPassword) {
        data = docs[0].friends
      }else{
        data=["invalid creds..!"]
      }
      res.send(data)
    })
})