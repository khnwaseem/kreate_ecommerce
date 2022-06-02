import React from "react"
import {useSelector} from "react-redux"
import "../../assets/css/cart/cart.css"

const Cart = () => {

    
const cartSelector = useSelector((state) => state.addToCart)

console.log(cartSelector)

    return(
       <div>
           <div className="container">
                <div className="container__page">
                      <div className="container__cart">
                          <div className="container__cart__heading">
                              <h3>Shopping Bag</h3>
                          </div>
                          {
                              cartSelector.map((cartvalue) => {
                                  return (

                                    <div className="container__cart__detail" key={cartvalue.id}>
                                    <div className="container__cart__detail__image">
                                       <img alt={cartvalue.id} src= {cartvalue.image} />
                                    </div>
                                    <div className="container__cart__detail__name">
                                       <h5>{cartvalue.title}</h5> 
                                    </div>
                                    <div className="container__cart__detail__vendor">
                                          <h6>{cartvalue.vendor}</h6>
                                    </div>
                                    <div className="container__cart__detail__price">
                                        <p>{cartvalue.price}</p>
                                    </div>
                                </div>
                                  )
                              })
                          }
                      </div>
                      <div className="container__login">
                           <div className="container__login__header">
                                <p>Login to continue</p>
                           </div>
                           <div className="container__login__button">
                                <button>Login</button>
                           </div>
                      </div>
                </div>
           </div>
       </div>
    )
}

export default Cart