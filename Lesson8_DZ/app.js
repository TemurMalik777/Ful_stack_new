const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const { createViewPage } = require("./helpers/create_view_page");
const usersRoute = require("./routes/users.routes");
const postsRoute = require("./routes/posts.routes");
const commentsRoute = require("./routes/comments.routes");
// const getsRoute = require("./routes/main.routes");
// const { getRouten } = require("./controllers/main.controller");

dotenv.config();
const PORT = process.env.PORT || 3030;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(express.static("styles"));
app.use(express.static("images"));
app.set("view engine", "ejs");

app.use(morgan("short")); // middlewere ischida kirib o'tadi

// app.use(getsRoute);

app.get("/", (req, res) => {
    res.render(createViewPage("index"), { title: "Main page" });
});

// ---------------------------USER-----------------------------
app.use(usersRoute);
// --------------------------END-USER-----------------------------
//---------------------------POSTS-----------------------------------
app.use(postsRoute);
//----------------------------END-POST------------------------------------


//------------------------------COMMENT-------------------------------
app.use(commentsRoute);
//------------------------------END-COMMENT-------------------------
app.get("/comment", (req, res) => {
    res.render(createViewPage("comment"), { title: "Comments page" });
});

app.use((req, res) => {
    res.render(createViewPage("404"), { title: "Error page" });
});
app.listen(PORT, (error) => {
    console.log(`Server ${PORT} - portda ishga tushdi`);
});
