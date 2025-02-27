const {
    getAllCustomer,
    getCustomerByID,
    addNewCustomer,
    updateCustomerByID,
    deleteCustomersByID,
} = require("../controllers/customer.controller");

const router = require("express").Router();

router.get("/", getAllCustomer);
router.get("/:id", getCustomerByID);
router.post("/", addNewCustomer);
router.put("/:id", updateCustomerByID);
router.delete("/:id", deleteCustomersByID);

module.exports = router;
