const fs = require("fs");
const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const enforce = require("express-sslify");
const https = require("https");
const colors = require("colors");



const app = express();

app.use(express.json());



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
