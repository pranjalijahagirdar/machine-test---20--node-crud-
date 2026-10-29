const express = require('express')

let postController = require("../controller/postController")

let router = express.Router()

router.get("/", postController.getAllPost);
router.get("/:id", postController.getSinglePost);
router.post("/", postController.createPost);
router.patch("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);

module.exports = router;