const res = require("express/lib/response");
const { compileETag } = require("express/lib/utils");
const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

router.post("/register/",async(req,res)=>{
    console.log(req.body.username);
    const newUser = new User({
        username : req.body.username,
        email : req.body.email,
        password : CryptoJS.AES.encrypt(req.body.password,process.env.PASS_SEC).toString(),
        card_no: "",
        card_pin: "",
    });

    try{
        const savedUser = await newUser.save();
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
        console.log(savedUser);
        res.status(201).json(savedUser);
    }catch(err){
        // res.status(500).json(err);
        console.log(err);
    }
});


//LOGIN

router.post("/login/",async(req,res) => {
    try{
        console.log(req.body.username);
        const user = await User.findOne({username: req.body.username});
        !user && res.status(401).json("Wrong Credential!");

        const hashedPassword = CryptoJS.AES.decrypt(user.password,process.env.PASS_SEC);
        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        OriginalPassword !== req.body.password &&
         res.status(401).json("Wrong Credentials!");

        const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin:user.isAdmin,
            },
            process.env.JWT_SEC,{
                expiresIn: "3d"
            }
        );   
        const { password, ...others } = user._doc;
        res.status(200).json({...others,accessToken});
    }catch(err){
        console.log("***************************************");
        res.status(500).json(err);
    }
    
});
 
module.exports = router
