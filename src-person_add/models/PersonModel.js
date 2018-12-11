const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const personSchema = new Schema({
    name:String,
    age:Number,
    sex:String,
    id:{
        type:Number,
        unique:true,
        required:true
    }
})
const PersonModel = mongoose.model("persons",personSchema);

module.exports = PersonModel;