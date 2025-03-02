const {
    getAllfuelType,
    getFuelTypeByID,
    addNewFuelType,
    updateFuelTypeByID,
    deleteFuelTypeByID,
} = require("../controllers/fuelType.controller");

const router = require("express").Router();

router.get("/", getAllfuelType);
router.get("/:id", getFuelTypeByID);
router.post("/", addNewFuelType);
router.put("/:id", updateFuelTypeByID);
router.delete("/:id", deleteFuelTypeByID);

module.exports = router;
