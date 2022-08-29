const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const dotenv = require("dotenv");
var cors = require('cors');
// const userRoute = require("./routes/bankDatabase")

const bankDatabaseRoute = require("./routes/bankDatabase");
const ebankDatabaseRoute = require("./routes/ebankroutes");
// const addProductRoute = require("./router/addProduct");
const supplierdbroute= require("./routes/supplierdbroute");
dotenv.config();

mongoose
     .connect(
         process.env.MONGO_URL
         )
         .then(() => console.log("DB Connection is Successful"))
         .catch((err) => {
             console.log(err);
         });

app.use(cors());
app.use(express.json());
// app.use("/api/bank/sb/",supplierdbroute);

app.use("/bank/",ebankDatabaseRoute);
app.use("/account/",bankDatabaseRoute);
// app.use("/bank/sbal/",supplierdbroute);
// app.use("/api/suppliers/",addProductRoute);


         
app.listen(4009,()=>{
    console.log("Backend server is running");
});
