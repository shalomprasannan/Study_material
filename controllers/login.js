var User = require("../models/user.js");
const bcrypt = require('bcrypt');

const login= async (username, password) => {
  const result = 
    await User.find({ username: username })
    .then(async (docs) => {
        if (docs.length>0 && await bcrypt.compare(password, docs[0].password) ) {
        //validation passed
        return docs[0];
        } else {
        //validation failed
        return false;
        }
    });
    return result
}
module.exports = {login}
