const router = require("express").Router();

const gasStationRoute = require("./gasStation.routes");
const gasStationBranch = require("./gasstationbranch.routes");
const gasStationFuelType = require("./gasStationFuelType.routes");
const fuelTypeRoute = require("./fuelType.routes");

router.use("/gasStation", gasStationRoute);
router.use("/gasstationbranch", gasStationBranch);
router.use("/gasStationFuelType", gasStationFuelType);
router.use("/fuelType", fuelTypeRoute);

module.exports = router;
