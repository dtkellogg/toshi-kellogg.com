const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
  },
  description__1: {
    type: String,
    required: true,
  },
  description__2: {
    type: String,
    required: true,
  },
  description__3: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    default: false,
  },
  url: {
    type: String,
    default: false,
  },
  picture: {
    type: String,
    required: true,
  },
  // picture: {
  //   data: Buffer,
  //   contentType: String,
  // },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
