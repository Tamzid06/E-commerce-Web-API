const res = require("express/lib/response");
const Product = require("../models/Product");
const { verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();
const {Email_verification_And_Resend_to_Bank_func} = require("../API/Email_verification_And_Resend_to_Bank");
const PaymentAPI = require("../API/PaymentAPI");
const After_Success_Msg = require("../API/After_getting_success_from_supplier");

router.post("/success/",After_Success_Msg);

module.exports = router