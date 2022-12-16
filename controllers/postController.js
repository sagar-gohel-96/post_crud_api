const Post = require("../models/post.model");
const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.status(200).json({ sucess: true, data: posts });
  } catch (err) {
    res.status(400).json({ sucess: false, msg: "Show all posts" });
  }
};
const createPost = async (req, res) => {
  console.log(req.body, "create");
  try {
    const post = await Post.create(req.body);
    console.log(post, "create", post.title);
    res.status(200).json({ sucess: true, data: post });
  } catch {
    res.status(400).json({ sucess: false });
  }
};

const deletePost = async (req, res) => {
  const post = await Post.findByIdAndDelete(req.params.id);
  if (!post) {
    res.status(400).json({ sucess: false, data: {} });
  }
  res.status(200).json({ sucess: true, data: post });
};

const updatePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!post) {
    res.status(400).json({ sucess: false, data: {} });
  }
  res.status(200).json({ sucess: true, data: post });
};

module.exports = {
  getPosts,
  createPost,
  deletePost,
  updatePost,
};
