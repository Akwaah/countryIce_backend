const express = require("express");
// const router = express.Router();
// const blogpostController = require("../controllers/blogpostController");
const {
    createBlogpost,
    getBlogposts,
    getBlogpost,
    updateBlogpost,
    deleteBlogpost
} = require("../../controllers/blog/blogController");

const router = express.Router()

// GET all blogposts
router.get("/", getBlogposts);

// GET single blogpost by id
router.get("/:id", getBlogpost);

// POST new blogpost
router.post("/", createBlogpost);

// PUT update existing blogpost
router.put("/:id", updateBlogpost);

// DELETE a blogpost
router.delete("/:id", deleteBlogpost);

module.exports = router;