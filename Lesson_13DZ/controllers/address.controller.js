const db = require("../config/db");

const getAllAddress = (req, res) => {
    try {
        db.query("SELECT * FROM address", (error, results) => {
            if (error) {
                console.log("Error selecting address", error);
                return res.status(500).send({ error: "Internal Server Error" });
            }

            res.status(200).send(results);
        });
    } catch (error) {
        console.log(error);
    }
};

const getAddressByID = (req, res) => {
    try {
        const id = req.params.id;
        db.query("SELECT * FROM address WHERE id=?", [id], (error, results) => {
            if (error) {
                console.log("Error selecting address", error);
                return res.status(500).send({ error: "Internal Server Error" });
            }

            res.status(200).send(results);
        });
    } catch (error) {
        res.send("Internal server error");
        console.log(error);
    }
};

const addNewAddres = (req, res) => {
    try {
        const { name, customer_id, region, city, street } = req.body;
        db.query(
            `INSERT INTO address(name, customer_id, region, city, street) VALUES (?, ?, ?, ?, ?)`,
            [name, customer_id, region, city, street],
            (error, results) => {
                if (error) {
                    console.log("Error selecting address", error);
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

const updateAdderssByID = (req, res) => {
    try {
        const { name, customer_id, region, city, street } = req.body;
        const id = req.params.id;
        db.query(
            "UPDATE address set name=?, customer_id=?, region=?, city=?, street=? WHERE id=?",
            [name, customer_id, region, city, street, id],

            (error, results) => {
                if (error) {
                    console.log("Error selecting address", error);
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

const deleteAddressByID = (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM address WHERE id=?", [id], (error, result) => {
        if (error) {
            console.log("Error selecting address", error);
            return res.status(500).send({ error: "Internal Server Error" });
        }

        res.status(200).send(result);
    });
};

module.exports = {
    getAllAddress,
    getAddressByID,
    addNewAddres,
    updateAdderssByID,
    deleteAddressByID,
};
