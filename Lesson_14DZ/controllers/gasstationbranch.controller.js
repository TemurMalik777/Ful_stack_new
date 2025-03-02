const db = require("../config/db");

const getAllGasStationBranch = (req, res) => {
    try {
        db.query("SELECT * FROM gas_station_branch", (error, results) => {
            if (error) {
                console.log("Error selecting gas_station_branch", error);
                return res.status(500).send({ error: "Internal Server Error" });
            }

            res.send(results);
        });
    } catch (error) {
        console.log(error);
        res.status(200).send(results);
    }
};

const getGasStationBranchByID = (req, res) => {
    try {
        const id = req.params.id;
        db.query(
            "SELECT * FROM gas_station_branch WHERE id=?",
            [id],
            (error, results) => {
                if (error) {
                    console.log("Error selecting gas_station_branch", error);
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

const addNewGasStationBranch = (req, res) => {
    try {
        const { gas_station_id, branch_name, address, location, phone_number } =
            req.body;
        db.query(
            `INSERT INTO gas_station_branch(gas_station_id, branch_name, address, location, phone_number) VALUES (?, ?, ?, ?, ?)`,
            [gas_station_id, branch_name, address, location, phone_number],
            (error, results) => {
                if (error) {
                    console.log("Error selecting gas_station_branch", error);
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

const updateGasStationBranchByID = (req, res) => {
    try {
        const { gas_station_id, branch_name, address, location, phone_number } =
            req.body;
        const id = req.params.id;
        db.query(
            "UPDATE gas_station_branch set gas_station_id=?, branch_name=?, address=?, location=?, phone_number=? WHERE id=?",
            [gas_station_id, branch_name, address, location, phone_number, id],

            (error, results) => {
                if (error) {
                    console.log("Error selecting gas_station_branch", error);
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

const deleteGasStationBranchByID = (req, res) => {
    const id = req.params.id;
    db.query(
        "DELETE FROM gas_station_branch WHERE id=?",
        [id],
        (error, result) => {
            if (error) {
                console.log("Error selecting gas_station_branch", error);
                return res.status(500).send({ error: "Internal Server Error" });
            }

            res.status(200).send(result);
        }
    );
};

module.exports = {
    getAllGasStationBranch,
    getGasStationBranchByID,
    addNewGasStationBranch,
    updateGasStationBranchByID,
    deleteGasStationBranchByID,
};
