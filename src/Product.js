import React from 'react'
import './Product.css'
import { useStateValue } from './stateProvider'
import { uid } from './uid'
function Product({id,title, price, image, rating}) {

    const [state, dispatch] = useStateValue()

    const pushToCart = () => {
        dispatch({
            type:'ADD_TO_CART',
            item:{
                id,
                title,
                price,
                image,
                rating
            }
        });
    }
    console.log(state)

    return (
        <div className = "product" >

            <div className= "product__info" >

                <p>{title}</p>

                <p className = "product__price">
                    <small>Rs. </small>
                    <strong>{price}</strong>
                </p>

                <div className= "product__rating" >
                    {Array(rating).fill()
                    .map((_ , i) => (
                        <p key = {uid()} >⭐</p>
                    ))}
                    
                   
                </div>

            </div>

            <img src = {image} />

            <button onClick = {pushToCart} >Add to basket</button>
            
        </div>
    )
}

export default Product
