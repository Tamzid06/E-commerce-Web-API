const router = require("express").Router();
const mainf = require("../API/productSend");

router.post("/addProduct/",mainf);

module.exports = router