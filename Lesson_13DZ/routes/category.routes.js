const {
    getAllCategory,
    getCategoryByID,
    addNewCategory,
    updateCategoryByID,
    deleteCategoryByID,
} = require("../controllers/category.controller");

const router = require("express").Router();

router.get("/", getAllCategory);
router.get("/:id", getCategoryByID);
router.post("/", addNewCategory);
router.put("/:id", updateCategoryByID);
router.delete("/:id", deleteCategoryByID);

module.exports = router;
