import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux';
import "./cart.css"
import { dataService } from '../../utility/dataService'

function Cart(props) {

    const [cartItem, setCartItem] = useState([])
    const [loader ,setLoader] = useState(true)

    const handelCloseCart = () => {
        props.handelCloseMyCart(false);
    }

    
   

    useEffect(() => {
        handelMyCartItem();
        console.log("props.myCartItem", props.myCartItem)
        
    }, [cartItem])

    const handelMyCartItem = () => {
        let response = dataService.GetAllProduct()
        response.then((res) => {
            if (res) {

                setLoader(false);
                // debugger
                // for(let i =0; i< res.length; i++){
                //     res[i].push({wishlist:false});
                // }
                // Filter out data from myData based on IDs present in myIds
                //debugger
                let filteredData = res.filter(item => props.myCartItem.includes(item.id))
                localStorage.setItem('cartData', JSON.stringify(filteredData));
              
                console.log("filteredData", filteredData)
                setCartItem(filteredData);
               
            }
            else {
                setCartItem([]);
            }
        })
            .catch((error) => {
                setLoader(false);
                alert(error)
            })
    }

   

    const handelDelete = async (ind) => {
        
        let updatedCartIds = props.myCartItem.filter((item) => item !== ind);
    
        console.log("updatedCartIds", updatedCartIds);
       await props.setMyCartItem(updatedCartIds);
        handelMyCartItem();
    };
    
    return (
        <>
             <div className='main_cartContainer'>

             {loader ? <h5>Loading....</h5> :<div>
             <div className='cart_wrapper'>
                    <h6>My Cart</h6>
                    <i onClick={handelCloseCart} class="bi bi-x-lg"></i>
                </div>

                {cartItem.map((ele,ind) => (
                    <div key={ind}>

                        <img style={{maxWidth:"80px"}} src={ele.image} className='img' alt='...' />
                        <h6 className='item_title'>{ele.title}</h6>
                        <div className='delete_my_Cart'>
                        <i className="bi bi-trash  delete_icon"onClick={()=>{handelDelete(ele.id)}}></i>
                        </div>
                        <p className='item_description'>{ele.description}</p>
                    </div>

                ))}
                
                {props.myCartItem?.length>0 ?<div className='cart_button mb-5'>
                    <button type="button" class="btn btn-primary"><i class="bi bi-bag"></i>Buy Now</button>
                    {/* <button type="button" class="btn btn-secondary"><i class="bi bi-trash"></i>Remove Item</button> */}
                    <button onClick={handelCloseCart} type="button" class="btn btn-success"><i class="bi bi-cart3"></i>Continue Shopping</button>

                </div>: <div className='empty_cart'>
                    <h5 className='shopping_button'>Cart is empty Add Some Items</h5> 
                    <button onClick={handelCloseCart} type="button" class="btn btn-success mt-5"> <i class="bi bi-cart3"></i>Continue Shopping</button>
                    </div>
                }
                </div>
                
            }

            </div>

        </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);