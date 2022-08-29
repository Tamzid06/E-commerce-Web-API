const fetch = require("node-fetch");

let sendProducts = async ( url , obj) => {
    const { title , desc , img , categories ,size,color,price,SupplierEmail } = obj;
    console.log(title);
    let data = {
        title , 
        desc , 
        img , 
        categories,
        size,
        color,
        price,
        SupplierEmail
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
        console.log("Product sent failure");
    });

};

module.exports=sendProducts;