const router = require("express").Router();
const BankDatabase = require("../models/BankDatabase");
const CryptoJS = require("crypto-js");
const Transaction_ID_Sending = require("../API/Transaction_Send_To_Ecommerce");

const PaymentProcess = async (req, res) => {
    try {
        console.log("1111111111");

        amount_transacted = req.body.amount;
        // const _id = req.body._id;
        const card_no_ecom = req.body.card_no;
        const card_pin_ecom = req.body.card_pin;
        console.log(";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;");
        console.log(card_no_ecom);
        console.log(card_pin_ecom);
        console.log(";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;");
      

        const hashedPasswordecom = CryptoJS.AES.decrypt(card_pin_ecom,process.env.PASS_SEC);
        const OriginalPasswordecom = hashedPasswordecom.toString(CryptoJS.enc.Utf8);
    

        let user = await BankDatabase.find({ "email": req.body.CustomerEmail });
        const card_no_bank = user[0].card_number;
        const card_pin_bank = user[0].pin;

        console.log("8888888888888888888888888888888");
        console.log(card_no_bank);
        console.log(card_pin_bank);
        console.log("8888888888888888888888888888888");

        const hashedPasswordbank = CryptoJS.AES.decrypt(card_pin_bank,process.env.PASS_SEC);
        const OriginalPasswordbank = hashedPasswordbank.toString(CryptoJS.enc.Utf8);
        console.log("PPPPPPPPPPPAAAAAAAAAAAAAAAAAAAASSSSSSSSSSSSSSSSSS");

        console.log(OriginalPasswordecom);
        console.log(OriginalPasswordbank);

        console.log("PPPPPPPPPPPAAAAAAAAAAAAAAAAAAAASSSSSSSSSSSSSSSSSS");
        console.log(user[0].email);
        if ((user[0].balance >= req.body.amount) && (card_no_ecom == card_no_bank) && (OriginalPasswordecom == OriginalPasswordbank)) {
            const query = { email: user[0].email };
            newBalance = user[0].balance - req.body.amount;
            console.log("iiiiiiiiiiiiii");
            console.log(newBalance);
            const update = { $set: { email: user[0].email, balance: newBalance } };
            const options = {};
            await BankDatabase.updateOne(query, update, options);

            Transaction_Id = CryptoJS.AES.encrypt(req.body.CustomerEmail, req.body.createdAt).toString();
            console.log(Transaction_Id);

            await Transaction_ID_Sending('http://localhost:8000/api/transaction/details/', {
                Transaction_Id: Transaction_Id,
                CustomerEmail: req.body.CustomerEmail,
                OrderId: req.body.OrderId,
                TransactedAmount: amount_transacted
            });
            // console.log(email);
            res.status(200).json("Transaction Has Been Provided to Ecommerce");


        }
        console.log("******************");
        // let user2 = await BankDatabase.find({"email" : email});
        // console.log(user2[0].balance);


        // await email_Sending('http://localhost:8000/api/mailAuth/forBank/',{
        //     email:email,
        //     card_number:card_number,
        //     pin:pin,
        //     balance:balance
        // });
        // console.log(email);
        // res.status(200).json("Email Has Been Provided to Ecommerce");
    } catch (err) {

        res.status(500).json(err);
    }
}

module.exports = PaymentProcess;