const router = require("express").Router()

const flowersRoute = require("./flowers.routes")
const customersRoute = require("./customer.routes")
const addressRoute = require("./address.routes")
const categoryRouter = require("./category.routes")

router.use("/flowers", flowersRoute)
router.use("/customers", customersRoute)
router.use("/address", addressRoute)
router.use("/category", categoryRouter)
// router.use("/flowers", flowersRoute);

module.exports = router