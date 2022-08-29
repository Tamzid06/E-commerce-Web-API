
const fetch = require('node-fetch');

let email_Sending = async ( url , obj) => {
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
        console.log("SUCCCESSSSS");
    }).catch((err)=>{
        console.log("email sent failure");
    });

};

module.exports=email_Sending;