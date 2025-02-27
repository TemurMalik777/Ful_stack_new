const {
    getAllAddress,
    getAddressByID,
    addNewAddres,
    updateAdderssByID,
    deleteAddressByID,
} = require("../controllers/address.controller");

const router = require("express").Router();

router.get("/", getAllAddress);
router.get("/:id", getAddressByID);
router.post("/", addNewAddres);
router.put("/:id", updateAdderssByID);
router.delete("/:id", deleteAddressByID);

module.exports = router;
