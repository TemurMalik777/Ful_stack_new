const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const path = require("path");

dotenv.config();
const PORT = process.env.PORT || 3030;

const app = express();

app.set("view engine", "ejs");

app.use(morgan("short"));

app.get("/adabiyot", (req, res) => {
    res.render("adabiyot", { title: "Adabiyot page" });
});

app.get("/maqola", (req, res) => {
    res.render("maqola", { title: "Maqola page" });
});

app.get("/dissertatsiya", (req, res) => {
    res.render("dissertatsiya", { title: "Dissertatsiya page" });
});

app.get("/monografiya", (req, res) => {
    res.render("monografiya", { title: "Monografiya page" });
});

app.get("/muassasa", (req, res) => {
    res.render("muassasa", { title: "Muassasa page" });
});

app.get("/muallif", (req, res) => {
    res.render("muallif", { title: "Muallif page" });
});

app.get("/jurnal", (req, res) => {
    res.render("jurnal", { title: "Jurnal page" });
});

app.use((req, res) => {
    res.status(404).render("404", { title: "404 - Sahifa topilmadi" });
});

app.listen(PORT, () => {
    console.log(`Server ${PORT}-portda ishga tushdi`);
});
