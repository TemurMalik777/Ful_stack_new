const dotenv = require("dotenv");
const express = require("express");
const path = require("node:path");
const morgan = require("morgan");
const { title } = require("node:process");
const axios = require("axios");

dotenv.config();
const PORT = process.env.PORT || 3030;

const createViewPage = (page) => path.join(__dirname, "views", `${page}.ejs`);

const app = express();

app.use(express.urlencoded({ extended: false }));
//server static
app.use(express.static("styles"));
app.use(express.static("images"));
app.set("view engine", "ejs");

app.use(morgan("short")); // middlewere ischida kirib o'tadi

app.get("/", (req, res) => {
    res.render(createViewPage("index"), { title: "Main page" });
});

// ---------------------------USER-----------------------------

app.get("/users", async (req, res) => {
    try {
        const userData = await axios(
            `https://jsonplaceholder.typicode.com/users`
        );
        const users = await userData.data;
        res.render(createViewPage("users"), { title: "Users page", users });
    } catch (error) {
        res.send("Internal server error");
        console.log(error);
    }
});

app.get("/user/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const { data } = await axios(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );

        // const users = await userData.data;
        res.render(createViewPage("user"), { title: "Users page", user: data });
    } catch (error) {
        res.send("Internal server error");
        console.log(error);
    }
});

app.get("/add-user", (req, res) => {
    try {
        res.render(createViewPage("add-user"), { title: "Users page" });
    } catch (error) {
        res.send("Internal server error");
        console.log(error);
    }
});
//req.params(url-link), req.body (form), req.query (url-?belgidan keyin key - value)
app.post("/add-user", async (req, res) => {
    try {
        const { username, email, phone } = req.body;
        const userData = await axios.post(
            `https://jsonplaceholder.typicode.com/users`,
            {
                username,
                email,
                phone,
            }
        );
        const user = userData.data;
        res.render(createViewPage("user"), { title: "USers page", user });
    } catch (error) {
        res.send("Internal server error");
        console.log(error);
    }
});

app.delete("/user/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const userData = await axios.delete(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const user = userData.data;
        console.log(user);
        res.sendStatus(204);
    } catch (error) {
        res.send("Internal server error");
        console.log(error);
    }
});

// --------------------------END-USER-----------------------------

//---------------------------POSTS-----------------------------------

// app.get("/posts", async (req, res) => {
//     try {
//         const userData = await axios(
//             `https://jsonplaceholder.typicode.com/posts`
//         );
//         const posts = await userData.data;
//         res.render(createViewPage("posts"), { title: "Users page", posts });
//     } catch (error) {
//         res.send("Internal server error");
//         console.log(error);
//     }
// });

app.get("/posts", async (req, res) => {
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
});

app.get("/post/:id", async (req, res) => {
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
});

app.get("/add-post", (req, res) => {
    try {
        res.render(createViewPage("add-post"), { title: "Posts page" });
    } catch (error) {
        res.send("Internal server error");
        console.log(error);
    }
});
//---------------------------END-POSTS-------------------------------

app.get("/posts", async (req, res) => {
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
});

app.post("/add-post", async (req, res) => {
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
});

app.delete("/post/:id", async (req, res) => {
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
});
//----------------------------END-POST------------------------------------
app.get("/jobs", (req, res) => {
    res.render(createViewPage("jobs"), { title: "Jobs page" });
});
app.get("/gallary", (req, res) => {
    res.render(createViewPage("gallary"), { title: "Gallary page" });
});
app.get("/contacts", (req, res) => {
    res.render(createViewPage("contacts"), { title: "Contacts page" });
});

app.use((req, res) => {
    res.render(createViewPage("404"), { title: "Error page" });
});
app.listen(PORT, (error) => {
    console.log(`Server ${PORT} - portda ishga tushdi`);
});
