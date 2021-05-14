const router = require("express").Router();
const projectRoutes = require("./projects");

// Project routes
router.use("/portfolio", projectRoutes);

module.exports = router;