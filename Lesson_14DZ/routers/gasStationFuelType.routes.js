const {
    getAllgasStationFuelType,
    getGasStationFuelTypeByID,
    addNewGasStationFuelType,
    updateGasStationFuelTypeByID,
    deleteGasStationFuelTypeByID,
} = require("../controllers/gasStationFuelType.controller");

const router = require("express").Router();

router.get("/", getAllgasStationFuelType);
router.get("/:id", getGasStationFuelTypeByID);
router.post("/", addNewGasStationFuelType);
router.put("/:id", updateGasStationFuelTypeByID);
router.delete("/:id", deleteGasStationFuelTypeByID)

module.exports = router