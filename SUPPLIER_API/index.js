const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const dotenv = require("dotenv");

const addSupplierBankRoute = require("./router/supplierBank");
const addProductRoute = require("./router/addProduct");

dotenv.config();

mongoose
     .connect(
         process.env.MONGO_URL
         )
         .then(() => console.log("DB Connection is Successful"))
         .catch((err) => {
             console.log(err);
         });

app.use(express.json());
app.use("/api/suppliers/",addProductRoute);
app.use("/api/suppliers/bank/",addSupplierBankRoute);

         
app.listen(3030,()=>{
    console.log("Backend server is running");
});
