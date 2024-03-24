import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { dataService } from '../../utility/dataService';


function ProductDetails(props) {
  // console.log("------------>", props.myProdctId)

  const [details, setDetails] = useState([])
  const [loader, setLoader] = useState(true)

  const navigate = useNavigate();

  useEffect(() => {
    myProductDetails();

  }, [])

  const myProductDetails = () => {

    let response = dataService.getProductDetails(props.myProdctId)
    response
      .then((res) => {
        if (res) {

          setLoader(false)
          let myarr = [res]
          setDetails(myarr)
        }
      })
      .catch((error) => {
        setLoader(false)
        alert(error)
      })


  }
  
  const handleBackClick = () => {
     navigate("/product")
  }




  return (
  <div className='main-container'>
    <button className="btn btn-primary" type="submit" onClick={()=>{handleBackClick()}}>Back</button>
    {/* <button type='button' className='btn btn-primary mt-2 w-100' onClick={()=>{handelClick(ele.id)}} > View Details</button> */}

    {loader ? <h5>LOADING...</h5> : <div className='row'>
      {details.map((ele, ind) => (
        <div key={ele.id} className='col-md-12'>
          <div className='card w-100 mt-3' >
            <img src={ele.image} className="card-img-top" alt="..." />
            <div className="card_body">
              <h6 className='card_title'>{ele.title}</h6>
              <p><b>category :</b> {ele.category}</p>
              <p className='d-flex'><b>rating :</b><h6 className='m-0'>rate:</h6>{ele.rating.rate} <h6 className='ms-3 mb-0'>count:</h6>{ele.rating.count}</p>
              
              <p className=""> <b>Description :</b> {ele.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    }
  </div>
  )
}
const mapStateToProps = state => {
  return {
      myProdctId: state.myProdctId,
      myCartItem: state.cartItem
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      setmyProdctId: (productid) => dispatch({ type: "MY_PRODUCT_ID", payload: productid }),
      setMyCartItem: (item) => dispatch({ type: "MY_CART_ITEM", payload: item })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)
