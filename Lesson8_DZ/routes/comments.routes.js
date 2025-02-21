const express = require("express");
const {
    getComment,
    getCommentById,
    getAddComment,
    postAddComment,
    deleteCommentById,
    getEditById,
    putEditById,
} = require("../controllers/comments.controller");

const router = express.Router();

router.get("/comments", getComment);

router.get("/comment/:id", getCommentById);

router.get("/add-comment", getAddComment);

router.post("/add-comment", postAddComment);

router.delete("/comment/:id", deleteCommentById);

router.get("/edit-comment/:id", getEditById);

router.put("/edit-comment/:id", putEditById);

module.exports = router;
