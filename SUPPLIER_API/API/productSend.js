const router = require("express").Router();
const sendProducts = require("./sendProductsToEcommerce");
const SupplierBank = require("../models/SupplierBank");

const mainf = async(req,res)=>{
    try{
        console.log(req.body.title);
        const title = req.body.title;
        const desc =  req.body.desc;
        const img = req.body.img;
        const categories = req.body.categories;
        const size = req.body.size;
        const color = req.body.color;
        const price = req.body.price;
        const SupplierEmail = req.body.SupplierEmail;
        await sendProducts('http://localhost:8000/api/products/add/',{
            title: title,
            desc: desc,
            img: img,
            categories: categories,
            size: size,
            color: color,
            price: price,
            SupplierEmail:SupplierEmail
        });
        res.status(200).json("Product Has Been Provided to Ecommerce");
    }catch(err){

        res.status(500).json(err);
    }
}





module.exports = mainf;