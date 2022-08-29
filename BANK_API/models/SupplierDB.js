const mongoose = require("mongoose");



const SBankSchema = new mongoose.Schema(
    {
        card_number: {type:String , required: true},
        balance: {type:Number , default:0}

        
    },
    { timestamps: true }
)

module.exports = mongoose.model("SBankDatabase" , SBankSchema);