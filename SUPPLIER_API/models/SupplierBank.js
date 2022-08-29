const mongoose = require("mongoose");

 



const SupplierBankSchema = new mongoose.Schema(
    {
        email: {type:String , required: true},
        OrderId: {type:String , required: true},
        balance: {type:Number , required: true},
        TransactionNumber:{type:String , required: true,unique:true},
    },
    { timestamps: true }
)

module.exports = mongoose.model("SupplierBank" , SupplierBankSchema);