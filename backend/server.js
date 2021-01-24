const fs = require("fs");
const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const enforce = require("express-sslify");
const https = require("https");
const colors = require("colors");

// middleware
const cors = require("cors")
const compression = require('compression')

// database
const connectDB = require('./config/db.js')

// routes
const messageRoutes = require('./routes/messageRoutes')




dotenv.config();

connectDB();

const app = express();

app.use(express.json());

// compress responses
app.use(compression({ threshold: 0 }));

// CORS
app.use(cors())

var corsMiddleware = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'toshi-kellogg.com');
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, PATCH, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Authorization');

  next();
}

app.use(corsMiddleware);


// routes
app.use('/api/messages', messageRoutes)

// static build files for react side of app
const modifiedPath = __dirname.split("/").slice(0, -1).join("/");

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(modifiedPath, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(modifiedPath, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

//////////////
// To run in production:
if (process.env.NODE_ENV === "production") {
  const PORT = process.env.PORT || 5000;

  app.listen(
    PORT,
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
        .bold
    )
  );
}

// To run in development:
if (process.env.NODE_ENV === "development") {
  const PORT = process.env.PORT || 5000;

  const options = {
  };

  https.createServer(options, app).listen(PORT, () => {
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
        .bold
    );
  });
}
//////////////
