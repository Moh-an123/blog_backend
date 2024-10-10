const mongoose=require('mongoose');
const authorSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },

  author_id: {
    type: String,
    required: true,
  },
  author_name: {
    type: String,
    required: true,
  },
  author_image_url: {
    type: String,
  },
  no_of_posts: {
    type: Number,
  },
  bio: {
    type: String,
  },
});
module.exports = mongoose.model("AuthorsData", authorSchema, "authorsdetails");
