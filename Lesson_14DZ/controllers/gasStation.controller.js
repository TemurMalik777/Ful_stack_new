const { error } = require("console");
const db = require("../config/db");

const getAllgasStation = (req, res) => {
    try {
        db.query("SELECT * FROM gas_station", (error, results) => {
            if (error) {
                console.log("Error selecting gas_station", error);
                return res.status(500).send({ error: "Internal Server Error" });
            }

            return res.send(results);
        });
    } catch (error) {
        console.log(error);
        res.send(`Malumot olishda xatolik`);
    }
};

const getGasStationByID = (req, res)=>{
    try {
        const id = req.params.id;
        db.query(
            "SELECT * FROM gas_station WHERE id=?",
            [id],
            (error, results) => {
                if (error) {
                    console.log("Error selecting gas_station", error);
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
}

const addNewGasStation = (req, res) => {
    const { main_gas_station_name } = req.body;
    db.query(
        `INSERT INTO gas_station (main_gas_station_name)
        VALUES (?) 
        `,
        [main_gas_station_name],
        (error, results) => {
            if (error) {
                console.log("Error selecting gas_station", error);
                return res.status(500).send({ error: "Internal Server Error" });
            }

            res.status(201).send({
                message: "Gas station added",
                data: results,
            });
        }
    );
};


const updateGasStationByID = (req, res) => {
    try {
        const { main_gas_station_name } = req.body;
        const id = req.params.id;
        db.query(
            "UPDATE gas_station set main_gas_station_name=? WHERE id=?",
            [main_gas_station_name, id],

            (error, results) => {
                if (error) {
                    console.log("Error selecting gas_station", error);
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

const deleteGasStationByID = (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM gas_station WHERE id=?", [id], (error, result) => {
        if (error) {
            console.log("Error selecting gas_station", error);
            return res.status(500).send({ error: "Internal Server Error" });
        }

        res.status(200).send(result);
    });
};

module.exports = {
    getAllgasStation,
    getGasStationByID,
    addNewGasStation,
    updateGasStationByID,
    deleteGasStationByID
};
