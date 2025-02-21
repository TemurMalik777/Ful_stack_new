const { createViewPage } = require("../helpers/create_view_page");
const { get } = require("../routes/users.routes");

// const getRouten = (req, res) => {
//     res.render(createViewPage("index"), { title: "Main page" });
// };

const getRoutenPost = (req, res) => {
    res.render(createViewPage("jobs"), { title: "Jobs page" });
};

const getGallary = (req, res) => {
    res.render(createViewPage("gallary"), { title: "Gallary page" });
};

const getContacts = (req, res) => {
    res.render(createViewPage("contacts"), { title: "Contacts page" });
};

// const useDelete = (req, res) => {
//     res.render(createViewPage("404"), { title: "Error page" });
// };

module.exports = {
    //getRouten,
    getRoutenPost,
    getGallary,
    getContacts,
    //useDelete,
};
