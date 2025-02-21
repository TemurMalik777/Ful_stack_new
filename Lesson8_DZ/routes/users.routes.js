const { default: axios } = require("axios");
const express = require("express");
const { createViewPage } = require("../helpers/create_view_page");
const {
    getUsers,
    getUserById,
    getAddUser,
    postAddUser,
    deleteUserById,
    getEditById,
    putEditById,
} = require("../controllers/users.controller");
const router = express.Router();

router.get("/users", getUsers);

router.get("/user/:id", getUserById);

router.get("/add-user", getAddUser);

router.post("/add-user", postAddUser);

router.delete("/user/:id", deleteUserById);

router.get("/edit/:id", getEditById);

router.put("/edit/:id", putEditById);

module.exports = router;
