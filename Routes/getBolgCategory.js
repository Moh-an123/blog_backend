const express = require("express");
const router = express.Router();
const BlogData = require("./../Schema/BlogSchema");

// Route to get all blog data
router.get("/blogdata/:id", async (req, res) => {
    // const {category}=req.body;
    const {id}=req.params;
    console.log(id);
  try {
    // Fetch blog data from MongoDB
    const blogDetails = await BlogData.find({category:id});

    //
     
     if(blogDetails){return res.status(200).json(blogDetails); // Successfully send the data
    } else {
      console.log("No blog data found by category");
      return res.status(404).json({ message: "No blog data found" }); // Send 404 if no data
    }
  } catch (err) {
    console.error("Server error:", err.message);
    return res.status(500).json({ message: "Server error", error: err.message }); // Send server error
  }
});

module.exports = router;
