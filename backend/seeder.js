const mongoose = require('mongoose')
const dotenv = require('dotenv')
const colors = require('colors')

// import sample data
const projects = require('./data/projects')

// models
const Project = require('./models/projectModel')

const connectDB = require('./config/db.js')

// environment variables
dotenv.config()

// database
connectDB()

const importData = async () => {
  try {
    // delete the following so data isn't taken from database with data already loaded
    await Project.deleteMany()

    const sampleProjects = await Project.insertMany(projects);

    console.log(`Data imported!`.green.inverse)
    process.exit()
  } catch (err) {
    console.error(`${err}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    // so data isn't taken from database with data already loaded
    await Project.deleteMany()

    console.log(`Data destroyed!`.red.inverse)
    process.exit()
  } catch (err) {
    console.error(`${err}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}