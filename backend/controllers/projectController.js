const asyncHandler = require("express-async-handler");
const Project = require("../models/projectModel");
const mongoose = require("mongoose");


// @desc    Fetch all projects
// @router  GET /api/projects
// @access  Public
const getProjects = asyncHandler(async (req, res) => {
    console.log('In project controller')
    const projects = await Project.find({});
    res.json(projects);
})

// @desc    Fetch single project
// @router  GET /api/projects/:id
// @access  Public
const getProjectById = asyncHandler(async (req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
        const project = await Project.findById(req.params.id);
        if (project) {
            res.json(project);
        } else {
            res.status(404).json({
                message: "Project not found",
            });
        }
    } else {
        res.status(404).json({
            message: "Invalid ID. Project not found",
        });
    }
});


module.exports = {
    getProjects,
    getProjectById,
}