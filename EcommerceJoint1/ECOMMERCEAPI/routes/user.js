const res = require("express/lib/response");
const router = require("express").Router();
const {verifyToken, verifyTokenAndAuthentication,verifyTokenAndAdmin } = require("./verifyToken");
const User = require("../models/User");
const CryptoJS = require("crypto-js");

//Update
// router.put("/:id",verifyTokenAndAuthentication,async(req,res)=>{
    router.put("/:id",async(req,res)=>{
    // if(req.body.password){
    //     // req.body.card_pin = CryptoJS.AES.encrypt(req.body.password,process.env.PASS_SEC).toString();

    // }
    console.log("676767777777777777777777777777777666666666666")
    console.log(req.body);
    console.log(req.params.id);
    const hashedPassword = CryptoJS.AES.encrypt(req.body.card_pin,process.env.PASS_SEC).toString();
    // const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    console.log(hashedPassword);

    try{
        const updatedUser = await User.findByIdAndUpdate(
            {_id:req.params.id},
            {
                $set: {
                    "card_no":req.body.card_no,
                    "card_pin":hashedPassword,
                },
            },
            { new: true }
        );
        console.log("endddddddddddddddddddddddddddddddddd")
        console.log(updatedUser);
        res.status(200).json(updatedUser);
    }catch(err){
        res.status(500).json(err);
    }
});

router.put("/edit/:id",async(req,res)=>{
    // if(req.body.password){
    //     // req.body.card_pin = CryptoJS.AES.encrypt(req.body.password,process.env.PASS_SEC).toString();

    // }
    console.log("676767777777777777777777777777777666666666666")
    console.log(req.body);
    console.log(req.params.id);
    const hashedPassword = CryptoJS.AES.encrypt(req.body.card_pin,process.env.PASS_SEC).toString();
    // const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    console.log(hashedPassword);

    try{
        const updatedUser = await User.findByIdAndUpdate(
            {_id:req.params.id},
            {
                $set: {
                    "username":req.body.username,
                    "email":req.body.email,
                    "card_no":req.body.card_no,
                    "card_pin":hashedPassword,
                },
            },
            { new: true }
        );
        console.log("endddddddddddddddddddddddddddddddddd")
        console.log(updatedUser);
        res.status(200).json(updatedUser);
    }catch(err){
        res.status(500).json(err);
    }
});

// //Delete

// router.delete("/:id",verifyTokenAndAuthentication,async (req,res) => {
//     try{
//         await User.findByIdAndDelete(req.params.id);
//         res.status(200).json("User Has Been Deleted");
//     }catch(err){
//         res.status(500).json(err);
//     }
// });

// //Get user by admin only

// router.get("/find/:id",verifyTokenAndAdmin,async (req,res) => {
//     try{
//         const user = await User.findById(req.params.id);
//         const {password,...others} = user._doc;
//         res.status(200).json(others);
//     }catch(err){
//         res.status(500).json(err)
//     }
// });

// GET ALL USERS

router.get("/",verifyTokenAndAdmin,async (req,res) => {
    //for query in the url..let query name is new
    const query = req.query.new;
    try{
        const users = await User.find();
        res.status(200).json(users);
    }catch(err){
        res.status(500).json(err)
    }
});


// GET CARD

// router.get("/",verifyTokenAndAdmin,async (req,res) => {
    router.get("/cardinfo/:id",async (req,res) => {
    //for query in the url..let query name is new
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    // console.log()
    const query = req.query.new;
    try{
        const users = await User.find({_id: req.params.id});
        console.log(users);
        res.status(200).json(users);
    }catch(err){
        res.status(500).json(err)
    }
});



module.exports = router