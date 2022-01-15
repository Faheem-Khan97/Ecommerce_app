import React from 'react'
import './css/checkout.css'
import amznoffer from './images/amznoffer.jpg'
import { useStateValue } from './stateProvider'
import { uid } from './uid'


export const Checkout = () => {

    const [{cartItems, user}, dispatch] = useStateValue()
    const proceedToCheckoutClick = () => {
        // console.log("proceedddd")
    }
    return (
        <div className='checkout' >

            <div className="checkout__plist">
                <div className="img-container">
                    <img src={amznoffer} alt="offers" srcset="" />
                    <h2 className='checkout__heading'>Hi {user? user?.email: "Guest"}, Your Shopping Basket</h2>
                </div>
                {cartItems.length > 0 ? <div class="checkout__items-container" >
                    {cartItems?.map((item,i) => (
                        <div class="checkout__item">
                            <div class="left">
                                <img src={item.image} alt=""/>
                            </div>
                            <div class="right">
                                <h5 className='m-5' >{item.title}</h5>
                                <p className='m-5'>
                                 <small>$</small><span>{item.price}</span>
                                </p>
                                <div className= "product__rating m-5" >
                                    {Array(item.rating).fill()
                                    .map((_ , i) => (
                                        <p key = {uid()} >⭐</p>
                                    ))}
                                    
                   
                                </div>
                                <button className='btn-remove m-5 ' onClick={(e) => dispatch({
                                    type: "REMOVE_CART_ITEM", item:{
                                        id:item.id,
                                        title:item.title,
                                    }})} >Remove from basket</button>
                              
                            </div>

                    </div>
                    ))}
                    
                </div>:<div className='p-5' >
                        <h3>No items in your basket yet</h3>
                    </div>}
                
            </div>

            <div class="checkout__stotal">
                <h1 className='m-5' >Subtotal</h1>
                <div className='price' >
                    <div className='lg' >
                        <p className='m-5 gr-500 mr-2' >Total Items:  </p>
                        <span className='ml-2'>{cartItems?.length}</span>

                    </div>
                    <div className='lg' >
                        <p className='m-5 gr-500 mr-2' >Total Price: </p> 
                        <span className='ml-2'>{cartItems?.reduce((acc,c) => acc + c.price, 0)}</span> 

                    </div>
                    <button className='pr-checkout btn-remove' onClick = {proceedToCheckoutClick} disabled = {cartItems.length > 0 ?false :true} >Proceed to checkout</button>
                </div>
            </div>

        </div>
    )
}

export default Checkout
