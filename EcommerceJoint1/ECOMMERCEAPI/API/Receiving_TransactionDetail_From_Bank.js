const router = require("express").Router();
const { Email_Verification_Send, Sending_User_Email_To_Bank_For_Payment,Sending_Transaction_Data_To_Supplier,UpdatingEcommerceBank ,UpdatingSuppleirBank} = require("./API_main_function");
const User = require("../models/User");
const Order = require("../models/Order");
const Transaction = require("../models/Transaction");
const EcommerceBank = require("../models/EcommerceBank");

const Transaction_Details = async (req, res) => {
    try {
        console.log("^^^^^^^^^^^^^");
        const Transaction_Id = req.body.Transaction_Id;
        const CustomerEmail = req.body.CustomerEmail;
        const OrderId = req.body.OrderId;
        const TransactedAmount = req.body.TransactedAmount;
        // console.log(Transaction_Id);
        // console.log(CustomerEmail);
        // console.log(OrderId);
        // console.log(TransactedAmount);


        const newTransaction = new Transaction({
            Transaction_Id: Transaction_Id,
            CustomerEmail: CustomerEmail,
            OrderId: OrderId,
            TransactedAmount: TransactedAmount,

        });
        const Total = TransactedAmount;
        const EcommerceTrasactedAmount = TransactedAmount * 0.20;
        const SupplierAmount = Total - EcommerceTrasactedAmount;
        const newTransactedAmount = new EcommerceBank({
            OrderId: OrderId,
            balance: EcommerceTrasactedAmount,
        });

        // try{
        //     const savedEcommerceBank = await newTransactedAmount.save();
        //     res.status(201).json(savedEcommerceBank);

        // }catch(err){
        //     res.status(500).json(err);
        // }

        try {
            const savedEcommerceBank = await newTransactedAmount.save();
            const savedTransaction = await newTransaction.save();
            console.log(savedTransaction);
            res.status(201).json(savedTransaction);
        } catch (err) {
            res.status(500).json(err);
            console.log(err);
        }

        console.log(OrderId);
        console.log(SupplierAmount);
        console.log(Transaction_Id);


        


        await UpdatingEcommerceBank('http://localhost:4009/bank/ecommerce/',{
            ebalance: EcommerceTrasactedAmount,
            sbalance:SupplierAmount,

        });
        // await UpdatingSuppleirBank('http://localhost:4009/bank/sbal/bupdte/',{
        //     balance:SupplierAmount,
        // });

        await Sending_Transaction_Data_To_Supplier('http://localhost:3030/api/suppliers/bank/details/',{
            email:"tamzid.cse.sust@gmail.com",
            OrderId: OrderId,
            balance: SupplierAmount,
            TransactionNumber: Transaction_Id,
            
        });
        
        
        
        
        

        
        



        

    } catch (err) {
        res.status(500).json(err)
    }


}

module.exports = Transaction_Details;