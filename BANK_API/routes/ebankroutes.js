const res = require("express/lib/response");
const { compileETag } = require("express/lib/utils");
const router = require("express").Router();
const BankDatabase = require("../models/BankDatabase");
const EBankDatabase = require("../models/EcommerceDB");
const CryptoJS = require("crypto-js");
const {mainf,Email_Receive} = require("../API/emailSend");
const PaymentProcess = require("../Payment/PaymentProcess");



router.post("/ecommerce/",async(req,res)=>{

    console.log("hieiieieiee|||||||||||||||||||||||||||||||||||||||||||||||||||||||||");
    const users = await EBankDatabase.find({_id: "630990034c7c91711c38f268"});
    console.log("hieiieieiee|||||||||||||||||||||||||||||||||||||||||||||||||||||||||");
    console.log(users);
    console.log(req.body);
    const balance = users[0].balance;
    const newBalance = balance+req.body.ebalance;

    try{
        const updatedUser = await EBankDatabase.findByIdAndUpdate(
            {_id:"630990034c7c91711c38f268"},
            {
                $set: {
                    "balance":newBalance,
                },
            },
            { new: true }
        );
        console.log("endddddddddddddddddddddddddddddddddd")
        console.log(updatedUser);
        // res.status(200).json(updatedUser);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }

    console.log("AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");
    const users2 = await EBankDatabase.find({_id: "6309cc19cd34cc19e354da99"});
    console.log("AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");
    console.log(users2);
    const balance2 = users2[0].balance;
    const newBalance2= balance+req.body.sbalance;

    try{
        const updatedUser2 = await EBankDatabase.findByIdAndUpdate(
            {_id:"6309cc19cd34cc19e354da99"},
            {
                $set: {
                    "balance":newBalance2,
                },
            },
            { new: true }
        );
        console.log("endddddddddddddddddddddddddddddddddd")
        console.log(updatedUser2);
        // res.status(200).json(updatedUser2);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }


});


// router.post("/supplier/",async(req,res)=>{

//     console.log("AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");
//     const users = await EBankDatabase.find({_id: "6309cc19cd34cc19e354da99"});
//     console.log("AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");
//     console.log(users);
//     const balance = users[0].balance;
//     const newBalance = balance+req.body.balance;

//     try{
//         const updatedUser = await EBankDatabase.findByIdAndUpdate(
//             {_id:"6309cc19cd34cc19e354da99"},
//             {
//                 $set: {
//                     "balance":newBalance,
//                 },
//             },
//             { new: true }
//         );
//         console.log("endddddddddddddddddddddddddddddddddd")
//         console.log(updatedUser);
//         res.status(200).json(updatedUser);
//     }catch(err){
//         console.log(err);
//         res.status(500).json(err);
//     }
// });




// router.post("/e_payment/",EPaymentProcess);


module.exports = router
