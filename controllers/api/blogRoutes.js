const express = require("express");
const router = express.Router();
const { User, Blog, Comment } = require("../../models");
const withAuth = require('../../utils/auth.js');

// get all blogs and associated users/comments
router.get("/", async (req, res) => {
  try {
    const dbBlogs = await Blog.findAll({ include: [User, Comment] });
    res.json(dbBlogs);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "An error occurred", err });
  }
});

// get one blog with associated user and comment
router.get("/:id", async (req, res) => {
  try {
    const dbBlog = await Blog.findByPk(req.params.id, { include: [User, Comment] });
    res.json(dbBlog);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "An error occurred", err });
  }
});

// create new blog post
router.post("/", async (req, res) => {
  try {
    if (!req.session.user) {
      return res.status(401).json({ msg: "Please login!" });
    }

    const newBlog = await Blog.create({
      title: req.body.title,
      content: req.body.content,
      userId: req.session.user.id
    });

    res.json(newBlog);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "An error occurred", err });
  }
});

// update post - withAuth fx
router.put("/:id", async (req, res) => {
  try {
    if (!req.session.user) {
      return res.status(401).json({ msg: "Please login!" });
    }

    const updatedBlog = await Blog.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    res.json(updatedBlog);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "An error occurred", err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    if (!req.session.user) {
      return res.status(401).json({ msg: "Please login!" });
    }

    const delBlog = await Blog.destroy({
      where: {
        id: req.params.id
      }
    });

    res.json(delBlog);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "An error occurred", err });
  }
});

module.exports = router;
