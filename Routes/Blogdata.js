const express = require("express");
const router = express.Router();
const blogData = require("./../Schema/BlogSchema");

// Import a package to generate unique ids like uuid
const { v4: uuidv4 } = require('uuid'); // or use npm package shortid

router.post("/createblog", async (req, res) => {
  console.log("hello");
  
  const { post_title, post_body, category, image, date } = req.body;
  console.log(post_title, post_body, category, image, date);
  
  try {
    // Generate a unique post_id
    const post_id = uuidv4(); // or use shortid.generate() for shorter id

    // Assign a static author_id or customize as per your logic
    // const author_id = 111;
    
    const newBlog = new blogData({
      post_id, 
      post_title, 
      post_body, 
      author_id, 
      category, 
      date, 
      image
    });
    
    await newBlog.save();
    // const data = await blogData.find();
    
    // for (const doc of data) {
    //   const post_id = uuidv4();
    //   await blogData.updateOne(
    //     { _id: doc._id },
    //     { $set: { post_id: post_id } }
    //   );
    // }
    res.status(201).json({ message: "Blog created successfully!" });
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create blog" });
  }
});

module.exports = router;
