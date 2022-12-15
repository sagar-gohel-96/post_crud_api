const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.get("/", postController.getPosts);
router.post("/create", postController.createPost);
router.delete("/:id", postController.deletePost);
router.put("/:id", postController.updatePost);
module.exports = router;
