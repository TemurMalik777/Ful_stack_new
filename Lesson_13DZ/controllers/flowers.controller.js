const { count, error } = require("console");
const db = require("../config/db");

const getAllFlowers = (req, res) => {
    try {
        db.query("SELECT * FROM flowers", (error, results) => {
            if (error) {
                console.log("Error selecting flowers", error);
                return res.status(500).send({ error: "Internal Server Error" });
            }

            res.send(results);
        });
    } catch (error) {
        console.log(error);
        res.send(`Malumot olishda xatolik`);
    }
};

const getFlowerByID = (req, res) => {
    try {
        const id = req.params.id;
        db.query("SELECT * FROM flowers WHERE id=?", [id], (error, result) => {
            if (error) {
                console.log("Error selecting flowers", error);
                return res.status(500).send({ error: "Internal Server Error" });
            }

            res.status(200).send(result);
        });
    } catch (error) {
        res.send("Internal server error");
        console.log(error);
    }
};

const addNewFlower = (req, res) => {
    const {
        name,
        color,
        price,
        category_id,
        count,
        description,
        import_from,
        photo,
    } = req.body;
    db.query(
        `INSERT INTO flowers (name, color, price, category_id, count, description, import_from, photo)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?) 
        `,
        [
            name,
            color,
            price,
            category_id,
            count,
            description,
            import_from,
            photo,
        ],
        (error, results) => {
            if (error) {
                console.log("Error selecting flowers", error);
                return res.status(500).send({ error: "Internal Server Error" });
            }

            res.send(results);
        }
    );
};

const updateFlowersByID = (req, res) => {
    const {
        name,
        color,
        price,
        category_id,
        count,
        description,
        import_from,
        photo,
    } = req.body;

    const id = req.params.id;

    db.query(
        "UPDATE flowers set name=?, color=?, price=?, category_id=?, count=?, description=?, import_from=?, photo=? WHERE id=?",
        [
            name,
            color,
            price,
            category_id,
            count,
            description,
            import_from,
            photo,
            id,
        ],

        (error, results) => {
            if (error) {
                console.log("Error selecting flowers", error);
                return res.status(500).send({ error: "Internal Server Error" });
            }

            res.status(200).send(results);
        }
    );
};

const deletFlowersByID = (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM flowers WHERE id=?", [id], (error, result) => {
        if (error) {
            console.log("Error selecting flowers", error);
            return res.status(500).send({ error: "Internal Server Error" });
        }

        res.status(200).send(result);
    });
};

module.exports = {
    getAllFlowers,
    addNewFlower,
    getFlowerByID,
    updateFlowersByID,
    deletFlowersByID,
};
