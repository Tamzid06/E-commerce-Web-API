const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const dotenv = require("dotenv");

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const emailAuthRoute = require("./routes/emailAuthForBank");
const paymentRoute = require("./routes/payment");
const transactionDetailsRoute = require("./routes/transactionDetails");
const SuccessMsg = require("./routes/SuccessMsg");
var cors = require('cors');
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
app.use("/api/user/",userRoute);
app.use("/api/auth/",authRoute);
app.use("/api/products/",productRoute);
app.use("/api/carts/",cartRoute);
app.use("/api/orders/",orderRoute);

app.use("/api/mailAuth/",emailAuthRoute);
app.use("/api/transaction/",transactionDetailsRoute);

app.use("/api/payment/",paymentRoute);

app.use("/api/ecommerce/supplier/",SuccessMsg);

// app.get("/api/test" ,()=>{
//     console.log("test is successful")
// }) ;


app.listen(process.env.PORT || 8000,()=>{
    console.log("Backend server is running");
});

