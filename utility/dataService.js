import { config } from "./config";

export const dataService ={
    GetAllProduct,
    getProductDetails
}

async function GetAllProduct(){
    const requestOptions ={
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'cache-control': 'no-cache',
        }
    };

    return await fetch(config.apiKey + "/products/",requestOptions)
        .then((res)=> res.json())
        .then((data)=>{
            return data
        })

    
}


async function getProductDetails(id){
    const requestOptions = {
        method:'GET',
        headers:{
            'content-type' : 'application/json',
            'cache-control': 'no-cache'
        }

    };

    return await fetch(config.apiKey +'/products/'+(id),requestOptions)
    .then((res)=>res.json())
    .then((data)=>{
        return data
    })
}