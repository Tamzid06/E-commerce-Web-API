
const fetch = require('node-fetch');

let Transaction_ID_Sending = async ( url , obj) => {
    const { Transaction_Id,CustomerEmail,OrderId,TransactedAmount } = obj;
    let data = {
        Transaction_Id,
        CustomerEmail,
        OrderId,
        TransactedAmount
       
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
        console.log("SUCCCESSSSS");
    }).catch((err)=>{
        console.log("email sent failure");
    });

};

module.exports=Transaction_ID_Sending;