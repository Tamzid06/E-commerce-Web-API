const router = require("express").Router();
const mainf = require("../API/productSend");
const addSupplierBankDetail = require("../API/Supplier_Bank_Info_Add_API");

router.post("/details/",addSupplierBankDetail);

module.exports = router