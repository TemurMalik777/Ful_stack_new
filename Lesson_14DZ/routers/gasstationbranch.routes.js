const {
    getAllGasStationBranch,
    getGasStationBranchByID,
    addNewGasStationBranch,
    updateGasStationBranchByID,
    deleteGasStationBranchByID,
} = require("../controllers/gasstationbranch.controller");

const router = require("express").Router();

router.get("/", getAllGasStationBranch);
router.get("/:id", getGasStationBranchByID);
router.post("/", addNewGasStationBranch);
router.put("/:id", updateGasStationBranchByID)
router.delete("/:id", deleteGasStationBranchByID)

module.exports = router