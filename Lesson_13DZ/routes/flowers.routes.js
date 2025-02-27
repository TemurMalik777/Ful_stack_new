const {
    getAllFlowers,
    addNewFlower,
    getFlowerByID,
    updateFlowersByID,
    deletFlowersByID,
} = require("../controllers/flowers.controller");

const router = require("express").Router();

router.get("/", getAllFlowers);
router.get("/:id", getFlowerByID);
router.post("/", addNewFlower);
router.put("/:id", updateFlowersByID);
router.delete("/:id", deletFlowersByID);

module.exports = router;
