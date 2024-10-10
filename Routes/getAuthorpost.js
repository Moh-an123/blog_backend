const express=require('express');
const router=express.Router();
const blogSchema=require('../Schema/BlogSchema');

router.get('/getauthorpost/:id',async(req,res)=>{
    const author_id=req.params.id;
console.log(author_id);

    try {
         const response=await blogSchema.find({author_id:author_id})
   res.status(200).json(response);
        } catch (error) {
         res.status(403).json({message:"can;t fount"})
    }
});
module.exports=router;