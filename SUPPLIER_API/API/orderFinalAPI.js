// const router = require("express").Router();
// const SupplierBank = require("../models/SupplierBank");

// const orderFinal = async(req,res)=>{
//     try{
//         const order = await Order.find({"_id" : req.params.id});
//         const userid = order[0].userID
//         const user = await User.find({"_id" : userid});
//         console.log(user[0].email);
//         console.log(order[0].createdAt);

//         await Sending_User_Email_To_Bank_For_Payment('http://localhost:3000/api/bank/account/payment/',{
//             CustomerEmail: user[0].email,
//             OrderId: req.params.id,
//             amount:order[0].amount,
//             createdAt: order[0].createdAt
            
//         });   
//         res.status(200).json("Ordered User's Email Has Sent To The Bank");


//     }catch(err){
//         res.status(500).json(err)
//     }


// }
//     // try{
//     //     console.log("__________________777777777777777______________")
//     //     // console.log(req.body.email);
//     //     const email = req.body.email;
//     //     const card_number =  req.body.card_number;
//     //     const pin = req.body.pin;
//     //     const balance = req.body.balance;

//     //     let user = await User.find({email: email});
//     //     user = user[0];
//     //     // !user && res.status(401).json("Wrong Credential!");
//     //     // console.log(user._doc);
//     //     console.log(user.email);
//     //     console.log("????????????????????");
//     //     console.log(card_number);

//     //     await Email_Verification_Send('http://localhost:3000/api/bank/account/mail_verification/',{
//     //         email: user.email,
//     //         card_number:card_number,
//     //         pin:pin,
//     //         balance:balance
//     //     });
//     //     console.log("///////////////////");
//     //     // console.log(res.status(200).json("Email Verification Ok").toString());
        
//     // }catch(err){

//     //     res.status(500).json(err);
//     // }
// // }





// module.exports = orderFinal;