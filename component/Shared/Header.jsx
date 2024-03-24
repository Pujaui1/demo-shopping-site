import React ,{ useState } from 'react'
//  import '../Dashboard/dashboard.css'
import { connect, useSelector } from 'react-redux';
import "bootstrap-icons/font/bootstrap-icons.css";
import Cart from '../cart/Cart';
      
import {BsSearch,BsFillBellFill,BsFillEnvelopeFill,BsPersonCircle} from 'react-icons/bs'
// import { Cart } from '../cart/Cart';

const Header = (props) => {
  const[showCart , setShowCart] = useState(false)

  const handelCart = () =>{
    setShowCart(!showCart)
  }
  const handelCloseMyCart = (cartState) =>{
    setShowCart(cartState)
  }

  let storeCartItem = JSON.parse(localStorage.getItem('cartData'))
  console.log("storeCartItem",storeCartItem)
  return (
   <header className='header'>

    <span className='header-left'>
      <input type='text' placeholder='search here' />
      <BsSearch className ='icon'/>
    </span>

    <div className='header-right' >
      <div className='cart_icon'>
      <i className="bi bi-cart-check"  onClick={() =>{ handelCart()}}></i>
      <h6 className='cart_item_number'>{storeCartItem.length>0? storeCartItem.length : null }</h6>
      </div>
      <i class="bi bi-heart"></i>
      <BsFillBellFill className ='icon'/>
      {/* <BsFillEnvelopeFill className ='icon'/> */}
      <BsPersonCircle className = 'icon'/>
      {showCart && <Cart handelCloseMyCart={handelCloseMyCart}/>}
    </div>

   </header>
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


export default connect(mapStateToProps, mapDispatchToProps) (Header);
