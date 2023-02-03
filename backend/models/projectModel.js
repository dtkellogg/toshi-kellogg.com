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
  abstract: {
    type: String,
    required: true,
  },
  html: {
    type: Array,
  },
  css: {
    type: Array,
  },
  scss: {
    type: Array,
  },
  js: {
    type: Array,
  },
  reactJS: {
    type: Array,
  },
  nodeJS: {
    type: Array,
  },

  tailwindCSS: {
    type: Array,
  },
  nextJS: {
    type: Array,
  },
  typeScript: {
    type: Array,
  },
  graphQL: {
    type: Array,
  },

  security: {
    type: Array,
  },
  picture: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  url: {
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
