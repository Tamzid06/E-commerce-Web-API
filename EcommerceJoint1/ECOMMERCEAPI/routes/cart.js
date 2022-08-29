const res = require("express/lib/response");
const Cart = require("../models/Cart");
const { verifyToken,verifyTokenAndAdmin, verifyTokenAndAuthentication } = require("./verifyToken");
const router = require("express").Router();



//Create

router.post("/add/",verifyToken,async(req,res) => {
    console.log(req.body);
    const newCart = new Cart(req.body);
    try{
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    }catch(err){
        res.status(500).json(err);
    }
});

//Update Carts

router.put("/:id",verifyTokenAndAuthentication,async (req,res) =>{
    try{
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {new: true}
        );
        res.status(200).json(updatedCart);
    }catch(err){
        res.status(500).json(err);
    }
});

//Delete

router.delete("/:id",verifyTokenAndAuthentication,async (req,res) => {
    try{
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart Has Been Deleted");
    }catch(err){
        res.status(500).json(err);
    }
});

//Get Cart by userid

router.get("/find/:userId",verifyTokenAndAuthentication,async (req,res) => {
    try{
        const cart = await Cart.findOne({userId: req.params.userId});
        res.status(200).json(cart);
    }catch(err){
        res.status(500).json(err)
    }
});

// GET ALL Cart

router.get("/",verifyTokenAndAdmin,async (req,res) => {
    try{
        const carts = await Cart.find();
        res.status(200).json(carts);
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router