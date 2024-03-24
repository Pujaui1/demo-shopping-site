import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
import { dataService } from '../../utility/dataService';
import './production.css'
import Heart from "react-animated-heart";
function ProductCard(props) {
     const [cardDetails, setCardDetails] = useState([]);
     const [loader ,setLoader] = useState(true)
     //const [isClick, setClick] = useState(-1);
    const navigate = useNavigate();



    // const discountPercent = (a, b) => {
    //     let offPrice = ((a - b) / a) * 100;
    //     return offPrice.toFixed(2); // Rounded to 2 decimal places
    // };

    const handelClick = (ind) => {
        props.setmyProdctId(ind);
         navigate("/productDetails");  
    }
    

    const handelOnCartClick = (ind) => {
        //debugger
        props.setMyCartItem([...props.myCartItem,ind]);
    }


    useEffect(()=>{
      MyAllProducts();
    },[]);
       
    const MyAllProducts = () =>{
    let response = dataService.GetAllProduct()
    response.then((res)=>{
       if(res){
        setLoader(false);
        // debugger
        // for(let i =0; i< res.length; i++){
        //     res[i].push({wishlist:false});
        // }
        setCardDetails(res);
       }
    })
    .catch((error) => { 
        setLoader(false)
        alert(error)
    })
    }
   
    // const changeColor = (id) =>{
    //     setClick(id);
    // }

    console.log("cardDetails===", cardDetails)
    return (
        <div>
            {loader ? <h5>Loading....</h5> : <div className='row'>
                  {cardDetails.map((ele, ind) => ( 
                    <div key={ele.id} className='col-md-4 mb-4'>
                        <div className='card card_container '>
                        <i className="bi bi-heart wishlist_icon w-100"></i>
                        {/* <div className='w-100'>&#10084;&#65039;</div> //text-align:end */}
                            <img src={ele.image} className="card-img-top" alt="..." />
                            <div className="card-body card_body">
                                <h6 className='card_title '>{ele.title}</h6>
                                <p className="card-text card_text">
                                    {ele.description}
                                </p>
                                <div className='d-flex justify-content-center'>
                                    <span className='mx-2' style={{ fontSize: "14px", color: 'black', whiteSpace: 'nowrap', fontWeight: "700" }}> category : {ele.category}</span>
                                    <span className='mx-2' style={{ fontSize: "14px", color: 'gray', whiteSpace: 'nowrap' }} > &#8377; {ele.price}</span>
                                    {/* <span style={{ fontSize: "12px", color: 'green', whiteSpace: 'nowrap', fontWeight: "700" }} >off by {discountPercent(ele.MRPprice, ele.discountPrice)} %</span> */}
                                </div>
                                <div className='btn_Details'>
                                <button type='button' className='btn btn-primary button1' onClick={() =>{handelOnCartClick(ele.id)}} > Add to Cart</button>
                                <button type='button' className='btn btn-primary button2' onClick={()=>{handelClick(ele.id)}} > View Details</button>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                ))}
                
                
            </div>
}
        </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
