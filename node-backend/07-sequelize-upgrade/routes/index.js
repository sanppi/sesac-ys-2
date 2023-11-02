//routes 안에 있는 index.js

const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

router.get("/", controller.main);
// "/" 경로에 대해 main함수 실행

module.exports = router;