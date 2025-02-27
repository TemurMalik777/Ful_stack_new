const db = require("../config/db");

const getAllCategory = (req, res) => {
    try {
        db.query("SELECT * FROM category", (error, results) => {
            if (error) {
                console.log("Error selecting category", error);
                return res.status(500).send({ error: "Internal Server Error" });
            }

            res.send(results);
        });
    } catch (error) {
        console.log(error);
        res.status(200).send(results);
    }
};

const getCategoryByID = (req, res) => {
    try {
        const id = req.params.id;
        db.query(
            "SELECT * FROM category WHERE id=?",
            [id],
            (error, results) => {
                if (error) {
                    console.log("Error selecting category", error);
                    return res
                        .status(500)
                        .send({ error: "Internal Server Error" });
                }

                res.status(200).send(results);
            }
        );
    } catch (error) {
        res.send("Internal server error");
        console.log(error);
    }
};

const addNewCategory = (req, res) => {
    try {
        const { name } = req.body;
        db.query(
            `INSERT INTO category(name) VALUES (?)`,
            [name],

            (error, results) => {
                if (error) {
                    console.log("Error selecting category", error);
                    return res
                        .status(500)
                        .send({ error: "Internal Server Error" });
                }

                res.send(results);
            }
        );
    } catch (error) {
        console.log(error);
        res.status(200).send(results);
    }
};

const updateCategoryByID = (req, res) => {
    try {
        const { name } = req.body;
        const id = req.params.id;
        db.query(
            `UPDATE category set name=? WHERE id=?`,
            [name, id],

            (error, results) => {
                if (error) {
                    console.log("Error selecting category", error);
                    return res
                        .status(500)
                        .send({ error: "Internal Server Error" });
                }

                res.status(200).send(results);
            }
        );
    } catch (error) {
        console.log(error);
        res.status(200).send(results);
    }
};

const deleteCategoryByID = (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM category WHERE id=?", [id], (error, result) => {
        if (error) {
            console.log("Error selecting category", error);
            return res.status(500).send({ error: "Internal Server Error" });
        }

        res.status(200).send(result);
    });
};

module.exports = {
    getAllCategory,
    getCategoryByID,
    addNewCategory,
    updateCategoryByID,
    deleteCategoryByID,
};
