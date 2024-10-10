const express = require('express');
const router = express.Router();
const userSchema=require('./../Schema/userSchema.js');

const shortid = require('shortid');

// Provide 64 unique characters
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ#$');

// router.post('/signup',async(req,res)=>{
// const {name,email,password}=req.body;
// try{
//     const existingUser = await userSchema.findOne({ 
//         $or: [{ email: email }, { name: name }] 
//     });

//     if (existingUser) {
//         return res.status(400).json({ message: "Email or number already exists" });
//     }
//       const newUser=new userSchema({
//         name,
//         email,
//         password
//       });
//       await newUser.save();
// }catch(err){
//     res.status(500).json({ message: err.message });
// }

// });
// module.exports=router;
const bcrypt = require('bcrypt');
const BlogSchema = require('../Schema/BlogSchema.js');
console.log("hi");

router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await userSchema.findOne({
            $or: [{ email: email }, { name: name }]
        });

        if (existingUser) {
            return res.status(400).json({ message: "Email or name already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
  let author_id=shortid();
  let data=await userSchema.find({author_id:author_id});
  console.log(data);
  
  while(data.length>0){
     author_id=shortid();
    data=await userSchema.find({author_id:author_id});
  }
console.log("2nd");

        const newUser = new userSchema({
            name ,
            email,
            author_id,
            password: hashedPassword
        });
        await newUser.save();
        res.status(201).json({ message: "User created successfully" ,author_id:author_id});
        
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
module.exports=router;