const mongoose = require("mongoose");



const BankSchema = new mongoose.Schema(
    {
        email: {type:String , required: true , unique: true},
        card_number: {type:String , required: true, unique: true},
        pin: {type:String , required: true},
        isAdmin: {
            type: Boolean,
            default:false,
        },
        balance: {type:Number , required: true}

        
    },
    { timestamps: true }
)

module.exports = mongoose.model("BankDatabase" , BankSchema);