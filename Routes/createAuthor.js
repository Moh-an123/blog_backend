const express=require('express');
const router=express.Router();
const authorSchema=require('../Schema/AuthorSchema');
router.post('/createauthor',async (req,res)=>{
    const{author_id}=req.body;
    console.log(author_id);
    
try {
     const author=new authorSchema({
        author_id: 101,
        author_name: "Alice Johnson",
        author_imgurl: "https://example.com/images/authors/alice.jpg",
        no_of_posts: 2,
        bio: "Alice is a seasoned programmer with over a decade of experience in software development. She specializes in web development and has a passion for teaching others."
    
     });
     await author.save();
     return res.status(200).json(author);
} catch (error) {
    res.status(402).json({message:error.json});
}
});
module.exports=router;