var mongoose = require("mongoose");
var schema = mongoose.Schema;

const imageSchema = new schema({
    fieldname:String,
    originalname:String,
    encoding:String,
    mimetype:String,
    buffer:Buffer,
    size:Number

},{timestamps:true})

const Image = mongoose.model('Image',imageSchema)

module.exports = Image;