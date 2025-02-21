const { createViewPage } = require("../helpers/create_view_page");
const express = require("express");

const {
    //getRouten,
    getRoutenPost,
    getGallary,
    getContacts,
    //useDelete,
} = require("../controllers/main.controller");
const router = express.Router();

// router.get("/", getRouten);

router.get("/jobs", getRoutenPost);
router.get("/gallary", getGallary);
router.get("/contacts", getContacts);

// router.use(useDelete);

module.exports = router;
