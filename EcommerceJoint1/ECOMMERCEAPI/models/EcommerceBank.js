const mongoose = require("mongoose");



const EcommerceBankSchema = new mongoose.Schema(
    {
        OrderId: {type:String , required: true},
        balance: {type:Number , required: true}
    },
    { timestamps: true }
)

module.exports = mongoose.model("EcommerceBank" , EcommerceBankSchema);