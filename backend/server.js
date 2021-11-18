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
const { corsMiddleware } = require('./middleware/corsMiddleware')

// routes
const messageRoutes = require('./routes/messageRoutes')
const projectRoutes = require('./routes/projectRoutes')

// database
const connectDB = require('./config/db.js')


dotenv.config();  // env variables
connectDB();  // db
const app = express();

app.use(express.json());
app.use(enforce.HTTPS({ trustProtoHeader: true }));  // redirect all url requests to https
app.use(compression({ threshold: 0 }));  // compress responses
app.use(cors())  // CORS
app.use(corsMiddleware);
// routes
app.use('/api/messages', messageRoutes)
app.use('/api/projects', projectRoutes)

//---------------------- static build files for react side of app ----------------------//

const modifiedPath = __dirname.split('/').slice(0, -1).join('/')

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

//---------------------- production ----------------------//

if (process.env.NODE_ENV === "production") {
  const PORT = process.env.PORT || 5000

  app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
  );
}

//---------------------- development ----------------------//

if (process.env.NODE_ENV === "development") {
  const PORT = process.env.PORT || 5000;

  const options = {
    key: fs.readFileSync("./SSL/server.key", "utf8"),
    cert: fs.readFileSync("./SSL/toshikellogg_com.crt", "utf8"),
  };

  https.createServer(options, app).listen(PORT, () => {
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
    );
  });
}