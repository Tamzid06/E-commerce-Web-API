const res = require("express/lib/response");
const { compileETag } = require("express/lib/utils");
const router = require("express").Router();
const BankDatabase = require("../models/BankDatabase");
const EBankDatabase = require("../models/EcommerceDB");
const CryptoJS = require("crypto-js");
const {mainf,Email_Receive} = require("../API/emailSend");
const PaymentProcess = require("../Payment/PaymentProcess");

// router.post("/register/",mainf);


router.get("/balance/:id",async(req,res)=>{
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    // const email = req.body.email;
    // const card_number =  req.body.card_number;
    // const pin = req.body.pin;
    // const balance = req.body.balance;
    // console.log(req.body.email);
    // console.log(card_number);
    // console.log(pin);
    // console.log(balance);
    try{
     
        const user = await BankDatabase.find({email:req.params.id});
        console.log(req.params.id);
        console.log(user);
        const ecom = await EBankDatabase.findById("630990034c7c91711c38f268");
        const sup = await EBankDatabase.findById("6309cc19cd34cc19e354da99");
        const balance_user = user[0].balance;
        const balance_ecom = ecom.balance;
        const balance_sup = sup.balance;
        console.log("BALANCEEEEEEEEEEEEEEEEEEEEEEEEEEEEE:");
        console.log(balance_user);
        console.log(balance_ecom);
        console.log(balance_sup);
        
        res.status(200).json({balance_user,balance_ecom,balance_sup});

    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});
router.post("/payment/",PaymentProcess);

router.post("/adding/",async(req,res)=>{
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    const email = req.body.email;
    const card_number =  req.body.card_number;
    const pin = req.body.pin;
    const balance = req.body.balance;
    console.log(req.body.email);
    console.log(card_number);
    console.log(pin);
    console.log(balance);
    try{
        
        let newUser = new BankDatabase({
            email : email,
            card_number : card_number,
            pin : CryptoJS.AES.encrypt(req.body.pin,process.env.PASS_SEC).toString(),
            balance: balance,
    
        });

        let savedUser = await newUser.save();
        console.log(savedUser);
        res.status(201).json(savedUser);
        console.log("%%%%%%%%%%%%%%%%%");
        // console.log(email);

    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});






// router.post("/register/", async (req, res) => {
//     console.log(req.body.email);
//     const newUser = new User({
//         email: req.body.email,
//         card_number: req.body.card_number,
//         pin: CryptoJS.AES.encrypt(req.body.pin, process.env.PASS_SEC).toString(),
//         balance: req.body.balance,
//     });
//     console.log(req.body.email);
//     await sendMail('http://localhost:8000/api/products/add/',{
//         email:email,
//     });
//     const email = await User.findOne({ email: req.body.email });
//     if (await !email) {
//         res.status(401).json("Wrong Credential!");
//     } else {

//         try {
//             const savedUser = await newUser.save();
//             console.log(savedUser);
//             res.status(201).json(savedUser);
//         } catch (err) {
//             res.status(500).json(err);
//             console.log(err);
//         }
//     }
// });


// //LOGIN

// router.post("/login/", async (req, res) => {
//     try {
//         console.log(req.body.email);
//         const user = await User.findOne({ email: req.body.email });
//         !user && res.status(401).json("Wrong Credential!");

//         const hashedpin = CryptoJS.AES.decrypt(user.pin, process.env.PASS_SEC);
//         const Originalpin = hashedpin.toString(CryptoJS.enc.Utf8);
//         Originalpin !== req.body.pin &&
//             res.status(401).json("Wrong Credentials!");
//         const {pin, ...others} = user._doc;
//         res.status(200).json({ ...others });
//     } catch (err) {
//         console.log("!!!!!!!!!!!!!!!!");
//         res.status(500).json(err);
//     }

// });

module.exports = router
