import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux';
import "./cart.css"
import { dataService } from '../../utility/dataService'

function Wishlist(props) {

   
    
    return (
       <></>
    )
}

const mapStateToProps = state => {
    return {
        myProdctId: state.myProdctId,
        myCartItem: state.myCartItem
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setmyProdctId: (productid) => dispatch({ type: "MY_PRODUCT_ID", payload: productid }),
        setMyCartItem: (item) => dispatch({ type: "MY_CART_ITEM", payload: item })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);