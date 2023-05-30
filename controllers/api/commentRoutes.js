const express = require("express");
const router = express.Router();
const { User, Blog, Comment } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const dbComments = await Comment.findAll({ include: [User, Blog] });
    res.json(dbComments);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "An error occurred", err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const dbComment = await Comment.findByPk(req.params.id, {
      include: [User, Blog],
    });
    res.json(dbComment);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "An error occurred", err });
  }
});

router.post("/", async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ msg: "Please login first!" });
  }
  try {
    const newComment = await Comment.create({
      body: req.body.body,
      userId: req.session.user.id,
      blogId: req.body.blogId,
    });
    res.json(newComment);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "An error occurred", err });
  }
});

router.put("/:id", async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ msg: "Please login first!" });
  }
  try {
    
    const updatedComment = await Comment.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json(updatedComment);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "An error occurred", err });
  }
});

router.delete("/:id", async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ msg: "Please login first!" });
  }
  try {
    
    const delComment = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(delComment);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "An error occurred", err });
  }
});

module.exports = router;
