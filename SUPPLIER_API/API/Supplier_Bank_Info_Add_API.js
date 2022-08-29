const router = require("express").Router();
// const sendProducts = require("./sendProductsToEcommerce");
const SupplierBank = require("../models/SupplierBank");
const sendMsgToEcommerce = require("./Send_Success_to_Ecommerce");


const addSupplierBankDetail = async (req, res) => {
    try {
        // console.log(req.body.title);
        const email = req.body.email;
        const OrderId = req.body.OrderId;
        const balance = req.body.balance;
        const TransactionNumber = req.body.TransactionNumber;

        const newSupplierBank = new SupplierBank({
            email: email,
            OrderId: OrderId,
            balance: balance,
            TransactionNumber: TransactionNumber

        });

        console.log("BEFORE SUCCESS MSG");
        console.log(OrderId);
        
        await sendMsgToEcommerce('http://localhost:8000/api/ecommerce/supplier/success/', {
            OrderId: OrderId,
            msg: "Success"
        });

        console.log("AFTER SUCCESS MSG");

        
        const savedSupplierBank = await newSupplierBank.save();
            // console.log(savedTransaction);
            // res.status(201).json(savedSupplierBank);
        
        res.status(200).json("Product Has Been Provided to Ecommerce");



    } catch (err) {

        res.status(500).json(err);
    }
}

module.exports = addSupplierBankDetail;