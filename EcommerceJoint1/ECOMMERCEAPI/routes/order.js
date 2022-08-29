const res = require("express/lib/response");
const Order = require("../models/Order");
const { verifyToken,verifyTokenAndAdmin, verifyTokenAndAuthentication } = require("./verifyToken");
const router = require("express").Router();



//Create

// router.post("/add/",verifyToken,async(req,res) => {
    router.post("/add/",async(req,res) => {
    console.log(req.body);
    console.log(req.header);
    
    const newOrder = new Order(req.body);
    try{
        // const product = newOrder
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
        console.log(res);
    }catch(err){
        res.status(500).json(err);
    }
});

//Update Orders

router.put("/:id",verifyTokenAndAdmin,async (req,res) =>{
    try{
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {new: true}
        );
        res.status(200).json(updatedOrder);
    }catch(err){
        res.status(500).json(err);
    }
});

//Delete

router.delete("/:id",verifyTokenAndAdmin,async (req,res) => {
    try{
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order Has Been Deleted");
    }catch(err){
        res.status(500).json(err);
    }
});

//Get Order by userid

// router.get("/find/:userId",verifyTokenAndAuthentication,async (req,res) => {
    router.get("/find/:userId",async (req,res) => {
    try{
        const orders = await Order.find({userID: req.params.userId});
        console.log("7777777777777777777777777777777");
        // orders = JSON.parse(orders.data);
        // ordstrng = JSON.stringify(orders);
        // console.log(typeof ordstrng);
        res.status(200).json(orders);
    }catch(err){
        res.status(500).json(err)
    }
});

// GET ALL Order

router.get("/",verifyTokenAndAdmin,async (req,res) => {
    try{
        const orders = await Order.find();
        res.status(200).json(orders);
    }catch(err){
        res.status(500).json(err)
    }
});



module.exports = router

