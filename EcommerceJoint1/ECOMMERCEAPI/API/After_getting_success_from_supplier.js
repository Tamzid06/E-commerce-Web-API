const router = require("express").Router();
const User = require("../models/User");
const Order = require("../models/Order");

const After_Success_Msg = async (req, res) => {
    try {

        // console.log(req.body.email);
        const OrderId = req.body.OrderId;
        const msg = req.body.msg;
        console.log("%$%$%$%$%$%$%$");
        console.log(OrderId);

        let order = await Order.find({ "_id": OrderId });
        if (msg == "Success") {
            console.log("Inside Success");
            const query = { "_id": OrderId };
            const update = { $set: { "_id": OrderId, status: "Shipment" } };
            const options = {};
            await Order.updateOne(query, update, options);
        }
    } catch (err) {

        res.status(500).json(err);
    }
}




module.exports = After_Success_Msg;