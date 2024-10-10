const express = require("express");
const router = express.Router();
const categorymodel = require("./../Schema/CategorySchema");

router.post('/category',async (req,res)=>{
const {cat}=req.body;
console.log(cat);

try{
    const catnew=new categorymodel({category:cat});
    await catnew.save();
       res.status(201).json({ message: "category created successfully" });
} catch (err) {
    console.log(err);
    
    res.status(500).json({ message: err.message });
}
})
module.exports=router;