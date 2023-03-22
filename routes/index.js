const express = require("express");
const routes = express.Router();

const homecontroller = require("../controller/home")
const secondcontroller = require("../controller/second")
routes.get("/",homecontroller.home);
routes.get("/two",secondcontroller.second);

module.exports=routes;