const asyncHandler = require("express-async-handler");

const corsMiddleware = (req, res, next) => {
  try{
    res.header('Access-Control-Allow-Origin', 'toshikellogg.com');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, PATCH, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Authorization');
  
    next();

  } catch (error) {
    console.log(error);
  }
}

module.exports = { corsMiddleware }