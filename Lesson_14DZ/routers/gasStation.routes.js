const {
    getAllgasStation,
    addNewGasStation,
    getGasStationByID,
    updateGasStationByID,
    deleteGasStationByID,
} = require("../controllers/gasStation.controller");

const router = require("express").Router();

router.get("/", getAllgasStation);
router.get("/:id", getGasStationByID);
router.post("/", addNewGasStation);
router.put("/:id", updateGasStationByID);
router.delete("/:id", deleteGasStationByID)

module.exports = router;
