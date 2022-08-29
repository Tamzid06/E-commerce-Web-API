// const res = require("express/lib/response");
// const { compileETag } = require("express/lib/utils");
// const router = require("express").Router();
// const BankDatabase = require("../models/BankDatabase");
// const SBankDatabase = require("../models/SupplierDB");
// const CryptoJS = require("crypto-js");
// const {mainf,Email_Receive} = require("../API/emailSend");
// const PaymentProcess = require("../Payment/PaymentProcess");



// router.post("/bupdte/",async(req,res)=>{

//     console.log("AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");
//     const users = await SBankDatabase.find({_id: "6309b171cd34cc19e354da97"});
//     console.log("AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");
//     console.log(users);
//     const balance = users[0].balance;
//     const newBalance = balance+req.body.balance;

//     try{
//         const updatedUser = await SBankDatabase.findByIdAndUpdate(
//             {_id:"6309b171cd34cc19e354da97"},
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

// // router.post("/e_payment/",EPaymentProcess);


// module.exports = router
