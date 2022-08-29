const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema(
    {

        Transaction_Id: { type:String , required: true , unique: true},
        CustomerEmail: {type:String , required: true},
        OrderId: {type:String , required: true},
        TransactedAmount: {type:Number , required: true},
        
    },
    { timestamps: true }
)

module.exports = mongoose.model("Transaction" , TransactionSchema);