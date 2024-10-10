const express = require("express");
const router = express.Router();
const BlogData = require("./../Schema/BlogSchema");

// Route to get all blog data
router.get("/blogdata", async (req, res) => {
  try {
    // Fetch blog data from MongoDB
    const blogDetails = await BlogData.find().limit(10);

    // Check if any blog data is found
    // if (blogDetails && blogDetails.length > 0) {
    //   // Format blog details: convert ObjectId to string and date to ISO format
    //   const formattedBlogDetails = blogDetails.map(post => ({
    //     ...post,
    //     _id: post._id.toString(),
    //     date: post.date.toISOString()
    //   }));
      
      
     // console.log("Blog data found:", formattedBlogDetails);
     
     if(blogDetails){return res.status(200).json(blogDetails); // Successfully send the data
    } else {
      console.log("No blog data found");
      return res.status(404).json({ message: "No blog data found" }); // Send 404 if no data
    }
  } catch (err) {
    console.error("Server error:", err.message);
    return res.status(500).json({ message: "Server error", error: err.message }); // Send server error
  }
});

module.exports = router;
