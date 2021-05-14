const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  liveUrl: { type: String, required: true },
  ghRepoUrl: { type: String, required: true },
  details: { type: String, required: true },
  contributors: { type: String, required: true },
  
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;