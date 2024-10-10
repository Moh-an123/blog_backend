const express = require("express");
const router = express.Router();
const categorymodel = require("./../Schema/CategorySchema");

router.get('/getcategory',async (req,res)=>{

console.log("hiiiii");

try{
    const catnew=await categorymodel.find();
   console.log(catnew);
   
       res.status(201).json(catnew);
} catch (err) {
    console.log(err);
    
    res.status(500).json({ message: err.message });
}
})
module.exports=router;