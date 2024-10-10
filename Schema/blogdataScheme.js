const moongose=require('mongoose');
const blogdataScheme=moongose.Schema({
    post_id:Number,
    post_title:String,
    post_body:String,
    author_id:Number,
    category:String,
    date:Date
});
module.exports=moongose.model("blogData",blogdataScheme);