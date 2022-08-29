
const fetch = require("node-fetch");

let Email_Verification_Send = async ( url , obj) => {
    const { email,card_number,pin,balance } = obj;
    let data = {
        email,
        card_number,
        pin,
        balance
       
    };
    if(obj.username){
        data.username = obj.username ; 
    }


    data=JSON.stringify(data);

    fetch( url , {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : data
    }).then((r)=>{
        console.log("success api");
    }).catch((err)=>{
        console.log("email sent failure");
    });

};


let Sending_User_Email_To_Bank_For_Payment = async ( url , obj) => {
    const { CustomerEmail,OrderId,amount,createdAt,card_no,card_pin} = obj;
    let data = {
        CustomerEmail,
        OrderId,
        amount,
        createdAt,
        card_no,
        card_pin
       
    };
    if(obj.username){
        data.username = obj.username ; 
    }


    data=JSON.stringify(data);

    fetch( url , {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : data
    }).then((r)=>{
        console.log("success api");
    }).catch((err)=>{
        console.log("email sent failure");
    });

};



let Sending_Transaction_Data_To_Supplier = async ( url , obj) => {
    const { email,OrderId,balance,TransactionNumber} = obj;
    let data = {
        email,
        OrderId,
        balance,
        TransactionNumber
       
    };
    if(obj.username){
        data.username = obj.username ; 
    }


    data=JSON.stringify(data);

    fetch( url , {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : data
    }).then((r)=>{
        console.log("success api");
    }).catch((err)=>{
        console.log("email sent failure");
    });

};

let UpdatingEcommerceBank = async ( url , obj) => {
    const { ebalance,sbalance} = obj;
    let data = {
        ebalance,
        sbalance
       
    };
    if(obj.username){
        data.username = obj.username ; 
    }


    data=JSON.stringify(data);

    fetch( url , {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : data
    }).then((r)=>{
        console.log("success api ecom bank");
    }).catch((err)=>{
        console.log("email sent failure ecom bank");
    });

};




module.exports={Email_Verification_Send,Sending_User_Email_To_Bank_For_Payment,Sending_Transaction_Data_To_Supplier,UpdatingEcommerceBank};