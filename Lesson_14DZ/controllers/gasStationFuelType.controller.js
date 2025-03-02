// const { getGasStationBranchByID } = require("./gasstationbranch.controller");
const db = require("../config/db");

const getAllgasStationFuelType = (req, res) => {
    try {
        db.query("SELECT * FROM gas_station_fuel_type", (error, results) => {
            if (error) {
                console.log("Error selecting gas_station_fuel_type", error);
                return res.status(500).send({ error: "internal Server Error" });
            }

            res.status(200).send(results);
        });
    } catch (error) {
        console.log(error);
        res.status(200).send(results);
    }
};

const getGasStationFuelTypeByID = (req, res) => {
    try {
        const id = req.params.id;
        db.query(
            "SELECT * FROM gas_station_fuel_type WHERE id=?",
            [id],
            (error, results) => {
                if (error) {
                    console.log("Error selecting gas_station_fuel_type", error);
                    return res
                        .status(500)
                        .send({ error: "Internal Sever Error" });
                }

                res.status(200).send(results);
            }
        );
    } catch (error) {
        console.log("Internal sever error");
    }
};

const addNewGasStationFuelType = (req, res) => {
    try {
        const { gas_station_branch_id, fuel_type_id, price, is_have } =
            req.body;
        db.query(
            `INSERT INTO gas_station_fuel_type(gas_station_branch_id, fuel_type_id, price, is_have) VALUES (?, ?, ?, ?)`,
            [gas_station_branch_id, fuel_type_id, price, is_have],
            (error, results) => {
                if (error) {
                    console.log("Error selecting gas_station_fuel_type", error);
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

const updateGasStationFuelTypeByID = (req, res) => {
    try {
        const { gas_station_branch_id, fuel_type_id, price, is_have } =
            req.body;
        const id = req.params.id;
        db.query(
            "UPDATE gas_station_fuel_type set gas_station_branch_id=?, fuel_type_id=?, price=?, is_have=? WHERE id=?",
            [gas_station_branch_id, fuel_type_id, price, is_have, id],

            (error, results) => {
                if (error) {
                    console.log("Error selecting gas_station_fuel_type", error);
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

const deleteGasStationFuelTypeByID = (req, res) => {
    const id = req.params.id;
    db.query(
        "DELETE FROM gas_station_fuel_type WHERE id=?",
        [id],
        (error, result) => {
            if (error) {
                console.log("Error selecting gas_station_fuel_type", error);
                return res.status(500).send({ error: "Internal Server Error" });
            }

            res.status(200).send(result);
        }
    );
};

module.exports = {
    getAllgasStationFuelType,
    getGasStationFuelTypeByID,
    addNewGasStationFuelType,
    updateGasStationFuelTypeByID,
    deleteGasStationFuelTypeByID,
};
