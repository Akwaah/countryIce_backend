const mongoose = require("mongoose");

const blogpostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false
  },
  body: {
    type: String,
    required: false
  },
  author: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

const Blogpost = mongoose.model("Blogpost", blogpostSchema);

module.exports = Blogpost;