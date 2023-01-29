// const Blogpost = require("../models/blogpost");
const mongoose = require('mongoose')
const Blogpost = require("../../models/blog/blogModel");

const createBlogpost = async (req, res) => {
  const blogpost = new Blogpost({
    title: req.body.title,
    body: req.body.body,
    author: req.body.author
  });

  try {
    const savedBlogpost = await blogpost.save();
    res.send(savedBlogpost);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getBlogposts = async (req, res) => {
  try {
    const blogposts = await Blogpost.find();
    res.send(blogposts);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getBlogpost = async (req, res) => {
  try {
    const blogpost = await Blogpost.findById(req.params.id);
    if (!blogpost) return res.status(404).send("Blogpost not found");
    res.send(blogpost);
  } catch (error) {
    res.status(400).send(error);
  }
};

const updateBlogpost = async (req, res) => {
  try {
    const updatedBlogpost = await Blogpost.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          title: req.body.title,
          body: req.body.body,
          author: req.body.author
        }
      },
      { new: true }
    );
    if (!updatedBlogpost) return res.status(404).send("Blogpost not found");
    res.send(updatedBlogpost);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteBlogpost = async (req, res) => {
  try {
    const deletedBlogpost = await Blogpost.findByIdAndDelete(req.params.id);
    if (!deletedBlogpost) return res.status(404).send("Blogpost not found");
    res.send(deletedBlogpost);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
    createBlogpost,
    getBlogposts,
    getBlogpost,
    updateBlogpost,
    deleteBlogpost
}