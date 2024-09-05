import React from 'react'
import './PlaceOrder.css'
import { useContext } from 'react';
import { StoreContext } from "../../Context/Context";
const PlaceOrder = () => {
  const {getTotalCartAmount } = useContext(StoreContext);
  return (
   <form className='place-order'>
    <div className="place-order-left">
      <p className="title">Delivery Information</p>
      <div className="multifields">
        <input type='text' placeholder='First Name'/>
        <input type='text' placeholder='Last Name'/>
      </div>
      <input type='email' placeholder='Email Address'/>
      <input type='text' placeholder='Street'/>
      <div className="multifields">
        <input type='text' placeholder='City'/>
        <input type='text' placeholder='State'/>
      </div>
      <div className="multifields">
        <input type='text' placeholder='Zip Code'/>
        <input type='text' placeholder='Country'/>
      </div>
      <input type='text' placeholder='Phone'/>
    </div>
    <div className="place-order-right">
    <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub Total</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p> 
            </div>
            <hr/>
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
           <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
    </div>
   </form>
  )
}

export default PlaceOrder