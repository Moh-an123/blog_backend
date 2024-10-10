const express = require("express");
const router = express.Router();
const blogData = require("./../Schema/BlogSchema");
const authorSchema = require('./../Schema/AuthorSchema');
const shortid = require('shortid');

// Provide 64 unique characters
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ#$');

// Route to update blog authors
router.post("/changeblog", async (req, res) => {
  console.log("Route accessed: /changeblog");

  try {
    const arr = {
      "101": "tcVyzQ", 
      "102": "IaOtwA", 
      "103": "8cc2tl", 
      "104": "M6b9Vz", 
      "105": "sxgw8w", 
      "106": "yhv8vz", 
      "107": "HTbUD5", 
      "108": "k25QLS",
      "abc123": "AaqD2Z"
    };

    // Loop through each author ID in the array
    for (const oldAuthorId in arr) {
      const newAuthorId = arr[oldAuthorId];  // Get the new author ID from `arr`

      // Count how many posts this author has
      const postCount = await blogData.countDocuments({ author_id:newAuthorId });
      console.log(`Author ${oldAuthorId} (new ID: ${newAuthorId}) has ${postCount} posts`);

      // Update the `no_of_posts` field in the `authorSchema`
      const updateResponse = await authorSchema.updateOne(
        { author_id: newAuthorId }, // Find the correct author by the new author ID
        { $set: { no_of_posts: postCount } } // Update with the post count
      );

      console.log(`Updated no_of_posts for author ${newAuthorId} to ${postCount}`);
    }

    res.status(201).json({ message: "Blog authors and post counts updated successfully!" });

  } catch (err) {
    console.error("Error updating blog authors:", err);
    res.status(500).json({ message: "Failed to update blog authors and post counts" });
  }
});

module.exports = router;
