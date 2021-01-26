const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        skills: {
            type: Array,
            required: true,
        },
        description: {
            type: String,
            required: true,
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
            default: false
        }
    }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
