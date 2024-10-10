// const mongoose=require('mongoose');
// const userSchema=mongoose.Schema({
//     name:String,
//     email:String,
//     password:String
// })
// module.exports=mongoose.model("Users",userSchema);
const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    author_id:{
 type:String,
 required:true
    },
    password: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model("Users", userSchema);
