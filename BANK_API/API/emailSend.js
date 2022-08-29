const router = require("express").Router();
const email_Sending = require("./emailSendToBank");
const BankDatabase = require("../models/BankDatabase");
const CryptoJS = require("crypto-js");

const mainf = async(req,res)=>{
    try{
        console.log("1111111111");
        console.log(req.body.email);
        const email = req.body.email;
        const card_number =  req.body.card_number;
        const pin = req.body.pin;
        const balance = req.body.balance;
        console.log(card_number);
        await email_Sending('http://localhost:8000/api/mailAuth/forBank/',{
            email:email,
            card_number:card_number,
            pin:pin,
            balance:balance
        });
        // console.log(email);
        res.status(200).json("Email Has Been Provided to Ecommerce");
    }catch(err){

        res.status(500).json(err);
    }
}

// const Email_Receive = async(req,res)=>{
//     try{
//         console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
//         const email = req.body.email;
//         const card_number =  req.body.card_number;
//         const pin = req.body.pin;
//         const balance = req.body.balance;
//         console.log(email);
//         console.log(card_number);
//         console.log(pin);
//         console.log(balance);
//         let newUser = new BankDatabase({
//             email : email,
//             card_number : card_number,
//             pin : CryptoJS.AES.encrypt(req.body.pin,process.env.PASS_SEC).toString(),
//             balance: balance,
    
//         });

//         let savedUser = await newUser.save();
//         console.log(savedUser);
//         res.status(201).json(savedUser);
//         console.log("%%%%%%%%%%%%%%%%%");
//         // console.log(email);

//     }catch(err){

//         res.status(500).json(err);
//     }
// }





module.exports = {mainf};