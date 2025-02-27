const db = require("../config/db");

const getAllCustomer = (req, res) => {
    try {
        db.query("SELECT * FROM customers", (error, results) => {
            if (error) {
                console.log("Error selecting customers", error);
                return res.status(500).send({ error: "Internal Server Error" });
            }

            res.send(results);
        });
    } catch (error) {
        console.log(error);
        res.status(200).send(results);
    }
};

const getCustomerByID = (req, res) => {
    try {
        const id = req.params.id;
        db.query(
            "SELECT * FROM customers WHERE id=?",
            [id],
            (error, results) => {
                if (error) {
                    console.log("Error selecting customers", error);
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

const addNewCustomer = (req, res) => {
    try {
        const { first_name, last_name, phone, email, password, address } =
            req.body;
        db.query(
            `INSERT INTO customers(first_name, last_name, phone, email, password, address) VALUES (?, ?, ?, ?, ?, ?)`,
            [first_name, last_name, phone, email, password, address],
            (error, results) => {
                if (error) {
                    console.log("Error selecting customers", error);
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

const updateCustomerByID = (req, res) => {
    try {
        const { first_name, last_name, phone, email, password, address } =
            req.body;
        const id = req.params.id;
        db.query(
            "UPDATE customers set first_name=?, last_name=?, phone=?, email=?, password=?, address=? WHERE id=?",
            [first_name, last_name, phone, email, password, address, id],

            (error, results) => {
                if (error) {
                    console.log("Error selecting customers", error);
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

const deleteCustomersByID = (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM customers WHERE id=?", [id], (error, result) => {
        if (error) {
            console.log("Error selecting customers", error);
            return res.status(500).send({ error: "Internal Server Error" });
        }

        res.status(200).send(result);
    });
};

module.exports = {
    getAllCustomer,
    getCustomerByID,
    addNewCustomer,
    updateCustomerByID,
    deleteCustomersByID,
};
