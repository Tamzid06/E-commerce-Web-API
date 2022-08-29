const res = require("express/lib/response");
const User = require("../models/User");
// const { verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();
const Email_verification_And_Resend_to_Bank_func = require("../API/Email_verification_And_Resend_to_Bank");

router.post("/forBank/",Email_verification_And_Resend_to_Bank_func);
// router.post("/forBank/",hi);

//Create

// router.post("/forBank/", async(req,res) => {
//     console.log("____________________________________");
//     console.log(req.body.email);
//     console.log(req.body.pin);
//     const email = req.body.email;
//     const card_no =  req.body.card_no;
//     const pin = req.body.pin;
//     const balance = req.body.balance;
//     // const newUser = new User(req.body);
//     try{
//         const user = await User.findOne({email: req.body.email});
//         !user && res.status(401).json("Wrong Credential!");
//         console.log(user)

//         await sendEmail('http://localhost:3000/api/bank/account/mail_verification/',{
//             email:email,
//             card_no:card_no,
//             pin:pin,
//             balance:balance
//         });
//         console.log("///////////////////");
//         console.log(res.status(200).json("Email Verification Ok"));
//     }catch(err){
//         res.status(500).json(err);
//     }
// });


module.exports = router