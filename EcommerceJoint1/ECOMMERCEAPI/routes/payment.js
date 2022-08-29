const res = require("express/lib/response");
const Product = require("../models/Product");
const { verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();
const {Email_verification_And_Resend_to_Bank_func} = require("../API/Email_verification_And_Resend_to_Bank");
const PaymentAPI = require("../API/PaymentAPI");
const Transaction_Details = require("../API/Receiving_TransactionDetail_From_Bank");


router.post("/:id",PaymentAPI);
router.post("/transactionDetails/",Transaction_Details);

module.exports = router