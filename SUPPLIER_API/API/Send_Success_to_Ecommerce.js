const fetch = require("node-fetch");

let sendMsgToEcommerce = async ( url , obj) => {
    const { OrderId,msg } = obj;
    let data = {
        OrderId,
        msg
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
        console.log("Success")
        console.log(r);
    }).catch((err)=>{
        // console.log("Product sent failure");
    });

};

module.exports=sendMsgToEcommerce;