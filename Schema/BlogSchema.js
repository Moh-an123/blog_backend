const mongoose = require('mongoose');

const blogDataSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true  // This will auto-generate the _id if not provided
  },
  post_id: {
    type: String,
    required: true,
    unique: true,
   
  },
  post_title: {
    type: String,
    required: true
  },
  post_body: {
    type: String,
    required: true
  },
  author_id: {
    type: String,
    required: true,
   
  },
  category: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  image: {
    type:String
  }
}, 
// {
//   timestamps: true  // This will add createdAt and updatedAt fields
// }
);

module.exports = mongoose.model('BlogData', blogDataSchema,"blogdetails");