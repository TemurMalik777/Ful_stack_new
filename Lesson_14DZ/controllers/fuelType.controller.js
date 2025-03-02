const db = require("../config/db");

const getAllfuelType = (req, res) => {
    try {
        db.query("SELECT * FROM fuel_type", (error, results) => {
            if (error) {
                console.log("Error selecting fuel_type", error);
                return res.status(500).send({ error: "Internal Server Error" });
            }

            res.send(results);
        });
    } catch (error) {
        console.log(error);
        res.status(200).send(results);
    }
};

const getFuelTypeByID = (req, res) => {
    try {
        const id = req.params.id;
        db.query(
            "SELECT * FROM fuel_type WHERE id=?",
            [id],
            (error, results) => {
                if (error) {
                    console.log("Error selecting fuel_type", error);
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

const addNewFuelType = (req, res) => {
    try {
        const { name } = req.body;
        db.query(
            `INSERT INTO fuel_type(name) VALUES (?)`,
            [name],
            (error, results) => {
                if (error) {
                    console.log("Error selecting fuel_type", error);
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

const updateFuelTypeByID = (req, res) => {
    try {
        const { name } = req.body;
        const id = req.params.id;
        db.query(
            "UPDATE fuel_type set name=? WHERE id=?",
            [name, id],

            (error, results) => {
                if (error) {
                    console.log("Error selecting fuel_type", error);
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

const deleteFuelTypeByID = (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM fuel_type WHERE id=?", [id], (error, result) => {
        if (error) {
            console.log("Error selecting fuel_type", error);
            return res.status(500).send({ error: "Internal Server Error" });
        }

        res.status(200).send(result);
    });
};

module.exports = {
    getAllfuelType,
    getFuelTypeByID,
    addNewFuelType,
    updateFuelTypeByID,
    deleteFuelTypeByID,
};
