const express = require("express");
var app = express();
var path = require("path");
const fs = require("fs");
var cookieParser = require("cookie-parser");
var formidable = require("formidable");

const uri =
  "mongodb+srv://shalom:SH%40lom%26g0d@shtrangy.odwft.mongodb.net/Shtrangy?retryWrites=true&w=majority";
var mongoose = require("mongoose");
var User = require("./models/user");
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose
  .connect(uri, options)
  .then((result) => {
    console.log("connected");
    app.listen(3001);
  })
  .catch((err) => {
    console.log("failed : " + err);
  });

app.use(cookieParser());
app.post("/api/upload", function (req, res) {
  var { inputUsername, inputPassword } = req.cookies;
  var filename=""
  User.find({ username: inputUsername }).then((docs) => {
    if (docs.length > 0 && docs[0].password === inputPassword) {
      var options= {uploadDir:path.join(__dirname, "images", inputUsername),  //add foldername later from url
                filename:(name,ext,part,form)=>{
                  if(part.name){
                    filename = part.name+"."+/[^//]+$/.exec(part.mimetype)
                    console.log(filename)
                    return filename;
                  }
                  else
                  throw err
                }}
      var form = formidable(options);

      form.parse(req, (err, fields, files) => {
        if (err) {
          res.send("invalid request")
        }
        else{
          console.log(files[fields.fieldname].newFilename)
          res.send(files[fields.fieldname].newFilename);
        }
      });
    }
  });
});

app.get("/files/*", function (req, res) {
  var { inputUsername, inputPassword } = req.cookies;
  User.find({ username: inputUsername }).then((docs) => {
    if (docs.length > 0 && docs[0].password === inputPassword) {
      var resolvedPath = path.join(__dirname, "images", inputUsername, req.url);
      if (fs.existsSync(resolvedPath)) {
        res.sendFile(resolvedPath);
      } else res.send("No Such file exists");
    } else {
      res.send("you don't have access to view this, please login");
    }
  });
});

app.get("/hi", function(req, res) {
  res.send("hi")
})







