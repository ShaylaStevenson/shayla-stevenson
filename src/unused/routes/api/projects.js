const router = require("express").Router();
const projectsController = require("../../controllers/projectsController");

// Matches with "/api/posts"
router
  .route("/portfolio")
  .get(projectsController.findAll)

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(projectsController.findById)

module.exports = router;