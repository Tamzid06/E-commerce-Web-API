const res = require("express/lib/response");
const { compileETag } = require("express/lib/utils");
const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

router.post("/register/",async(req,res)=>{
    console.log(req.body.username);
    console.log(req.body.email);
    console.log(req.body.password);
    // req.body.password == null || req.body.email == null || req.body.username == null && res.status(400).send({message:'No password'});
    const newUser = new User({
        username : req.body.username,
        email : req.body.email,
        password : CryptoJS.AES.encrypt(req.body.password,process.env.PASS_SEC).toString(),
        card_no: "",
        card_pin: "",
    });
   
    const errr = "error";

    try{
        if(req.body.password == null || req.body.email == null || req.body.username == null){
            res.status(400).send({errr,message:'No password'});
        }else{
        const savedUser = await newUser.save();
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
        console.log(savedUser);
        res.status(201).json(savedUser);
        }
    }catch(err){

        console.log("____________________________");
        // res.status(500).json(err);

        console.log(err);
        // console.log(err);
        console.log("____________________________");
        res.status(400).send({err,message:'Username or Email already exists'});
        
    }
});


//LOGIN

router.post("/login/",async(req,res) => {
    try{
        console.log(req.body.username);
        // console.log(req.body.email);
        const user = await User.findOne({username: req.body.username});
        !user && res.status(400).send({err,message:'Wrong Credential'});
        console.log("-------------------------");
        console.log(user);
        const hashedPassword = CryptoJS.AES.decrypt(user.password,process.env.PASS_SEC);
        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        OriginalPassword !== req.body.password &&
        res.status(400).send({err,message:'Wrong Credential'});
        //  res.status(401).json("Wrong Credentials!");

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
        // res.status(500).json(err);
        res.status(400).send({err,message:'Wrong Credential'});
    }
    
});
 
module.exports = router
