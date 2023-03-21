const express = require("express");
const routes = express.Router();

const homecontroller = require("../controller/home")
routes.get("/",homecontroller.home);

module.exports=routes;