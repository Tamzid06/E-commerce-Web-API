const mongoose = require("mongoose");


const userSchema = new mongoose.Schema(
    {
        username: { type:String , required: true , unique: true},
        email: {type:String , required: true,unique:true},
        password: {type:String , required: true},
        card_no: {type:String , default:""},
        card_pin: {type:String , default:""},
        isAdmin: {
            type: Boolean,
            default:false,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("User" , userSchema);