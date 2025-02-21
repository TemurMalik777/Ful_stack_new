const { default: axios, get } = require("axios");
const { createViewPage } = require("../helpers/create_view_page");

const getComment = async (req, res) => {
    try {
        const commentData = await axios(
            `https://jsonplaceholder.typicode.com/comments`
        );
        const comments = await commentData.data;
        res.render(createViewPage("comments"), {
            title: "Comments page",
            comments,
        });
    } catch (error) {
        res.send("Internal server error");
        console.log(error);
    }
};

const getCommentById = async (req, res) => {
    try {
        const id = req.params.id;
        const { data } = await axios(
            `https://jsonplaceholder.typicode.com/comments/${id}`
        );

        // const users = await userData.data;
        res.render(createViewPage("comment"), {
            title: "Comments page",
            comment: data,
        });
    } catch (error) {
        res.send("Internal server error");
        console.log(error);
    }
};

const getAddComment = (req, res) => {
    try {
        res.render(createViewPage("add-comment"), { title: "Comments page" });
    } catch (error) {
        res.send("Internal server error");
        console.log(error);
    }
};

const postAddComment = async (req, res) => {
    try {
        const { id, name, email, body } = req.body;
        const commentData = await axios.post(
            `https://jsonplaceholder.typicode.com/comments`,
            {
                id,
                name,
                email,
                body,
            }
        );
        const comment = commentData.data;
        res.render(createViewPage("comment"), {
            title: "Comment page",
            comment,
        });
    } catch (error) {
        res.send("Internal server error");
        console.log(error);
    }
};

//----------------------------------------------------

const deleteCommentById = async (req, res) => {
    try {
        const id = req.params.id;
        const commentData = await axios.delete(
            `https://jsonplaceholder.typicode.com/comments/${id}`
        );
        const comment = commentData.data;
        console.log(comment);
        res.sendStatus(204);
    } catch (error) {
        res.send("Internal server error");
        console.log(error);
    }
};

const getEditById = async (req, res) => {
    try {
        const { id } = req.params;
        const commentData = await axios({
            method: "GET",
            url: `https://jsonplaceholder.typicode.com/comments/${id}`,
        });
        const comment = commentData.data;
        res.render(createViewPage("edit-comment"), {
            title: "Comments page",
            comment,
        });
    } catch (error) {
        res.send("Internal server error");
        console.log(error);
    }
};

const putEditById = async (req, res) => {
    try {
        const { id } = req.params;
        const { nameId, name, email, body } = req.body;
        const commentData = await axios.put(
            `https://jsonplaceholder.typicode.com/comments/${id}`,
            {
                nameId,
                name,
                email,
                body,
            }
        );
        const comment = commentData.data;
        res.render(createViewPage("comment"), {
            title: "Comments page",
            comment,
        });
    } catch (error) {
        res.send("Internal server error");
        console.log(error);
    }
};

module.exports = {
    getComment,
    getCommentById,
    getAddComment,
    postAddComment,
    deleteCommentById,
    getEditById,
    putEditById,
};
