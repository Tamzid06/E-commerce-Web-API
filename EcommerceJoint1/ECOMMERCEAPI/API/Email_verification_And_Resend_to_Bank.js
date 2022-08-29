const router = require("express").Router();
const Email_Verification_Send = require("./API_main_function");
const User = require("../models/User");
const Order = require("../models/Order");

const Email_verification_And_Resend_to_Bank_func = async(req,res)=>{
    try{
        console.log("__________________777777777777777______________")
        // console.log(req.body.email);
        const email = req.body.email;
        const card_number =  req.body.card_number;
        const pin = req.body.pin;
        const balance = req.body.balance;

        let user = await User.find({email: email});
        user = user[0];
        // !user && res.status(401).json("Wrong Credential!");
        // console.log(user._doc);
        console.log(user.email);
        console.log("????????????????????");
        console.log(card_number);

        await Email_Verification_Send('http://localhost:4009/account/mailverification/',{
            email: user.email,
            card_number:card_number,
            pin:pin,
            balance:balance
        });
        console.log("///////////////////");
        // console.log(res.status(200).json("Email Verification Ok").toString());
        
    }catch(err){

        res.status(500).json(err);
    }
}




module.exports = Email_verification_And_Resend_to_Bank_func;