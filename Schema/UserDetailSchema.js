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
    password: {
        type: String,
        required: true
    },
    author_id:{
        type:String,
        required:true
    },no_of_posts:{
        type:Number,
        required:false
    },
    joined_date:{
        type:Date,
        requied:true
    }
});
module.exports = mongoose.model("Users", userSchema);
