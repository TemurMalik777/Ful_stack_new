// const router = express.Router()
const router = require("express").Router();

const { getPosts, getPostById, getAddPost, postPostss, postAddPost, deletePostById } = require("../controllers/posts.controller");


router.get("/posts", getPosts);

router.get("/post/:id", getPostById);

router.get("/add-post", getAddPost);
//---------------------------END-POSTS-------------------------------

router.get("/posts", postPostss);

router.post("/add-post", postAddPost);

router.delete("/post/:id", deletePostById);

module.exports = router