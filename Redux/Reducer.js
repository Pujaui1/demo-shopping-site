const iState ={
myProdctId:-1,
myCartItem:[]
}

const reducers = (state = iState, action) =>{
switch(action.type){
    case "MY_PRODUCT_ID":
    return{
        ...state,
        myProdctId : action.payload
    }
    case "MY_CART_ITEM":
        return{
            ...state,
            myCartItem :action.payload
        }

    
    default :
    return state
}
}

export default reducers;

