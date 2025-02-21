const { default: axios } = require("axios");
const { createViewPage } = require("../helpers/create_view_page");

const getPosts = async (req, res) => {
    try {
        const postData = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        const posts = postData.data;
        res.render(createViewPage("posts"), { title: "Posts page", posts });
    } catch (error) {
        res.status(500).send("Internal server error");
        console.log(error);
    }
};

const getPostById = async (req, res) => {
    try {
        const id = req.params.id;
        const { data } = await axios(
            `https://jsonplaceholder.typicode.com/posts/${id}`
        );

        // const users = await userData.data;
        res.render(createViewPage("post"), { title: "Posts page", post: data });
    } catch (error) {
        res.send("Internal server error");
        console.log(error);
    }
};

const getAddPost = (req, res) => {
    try {
        res.render(createViewPage("add-post"), { title: "Posts page" });
    } catch (error) {
        res.send("Internal server error");
        console.log(error);
    }
};

const postPostss = async (req, res) => {
    try {
        const postData = await axios(
            `https://jsonplaceholder.typicode.com/posts`
        );
        const posts = await postData.data;
        res.render(createViewPage("posts"), { title: "Posts page", posts });
    } catch (error) {
        res.send("Internal server error");
        console.log(error);
    }
};

const postAddPost = async (req, res) => {
    try {
        const { Id, title, body } = req.body;
        const userData = await axios.post(
            `https://jsonplaceholder.typicode.com/posts`,
            {
                Id,
                title,
                body,
            }
        );
        const post = userData.data;
        res.render(createViewPage("post"), { title: "Post page", post });
    } catch (error) {
        res.send("Internal server error");
        console.log(error);
    }
};

const deletePostById = async (req, res) => {
    try {
        const id = req.params.id;
        const userData = await axios.delete(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const post = postData.data;
        console.log(post);
        res.sendStatus(204);
    } catch (error) {
        res.send("Internal server error");
        console.log(error);
    }
};

module.exports = {
    getPosts,
    getPostById,
    getAddPost,
    postPostss,
    postAddPost,
    deletePostById,
};
