const express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var User = require("./models");
var mongoose = require("mongoose");
var Cookies = require("universal-cookie");
const uri =
  "mongodb+srv://shalom:SH%40lom%26g0d@shtrangy.odwft.mongodb.net/Shtrangy?retryWrites=true&w=majority";

const app = express();
const port = 8080;

const options = { useNewUrlParser: true, useUnifiedTopology: true };

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(uri, options)
  .then((result) => {
    console.log("connected");
    app.listen(port);
  })
  .catch((err) => {
    console.log("failed : " + err);
  });

app.post("/api/login", (req, res) => {
  const cookies = new Cookies(req.headers.cookie);
  const { username, password } = req.body;
  var isAuthenticated = "false",
    oauthToken = 100;
  User.find({ username })
    .then((docs) => {
      console.log(docs);
      if (docs.length != 0 && docs[0].password == password) {
        isAuthenticated = "true";
        cookies.set("isAuth", isAuthenticated, { path: "/", httpOnly: true });
      }
    })
    .then(() => {
      data = {
        isAuth: isAuthenticated,
        firstName:""
      };
      console.log(data);
      res.send(data);
    });
    
});
