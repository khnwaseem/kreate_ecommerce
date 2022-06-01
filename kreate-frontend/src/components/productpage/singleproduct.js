import React,{useState,useEffect} from "react"
import {useParams} from "react-router-dom"
import axios from "axios"
import "../../assets/css/productpage/singleproduct.css"
import { useDispatch,useSelector } from "react-redux"
import { AddToCart } from "../../features/cart/addToCartSlice"

const SingleProduct = () => {

     const [product,setProduct] = useState("")
     const [loading,setLoading] = useState(false)

     const addToCartSelector = useSelector(state => state.addToCart)
    
     const {slug} = useParams()

     const dispatch = useDispatch()

     useEffect(() => {
        setLoading(true)
        window.scrollTo(0, 0)
         axios.get(`http://localhost:3001/product/${slug}`)
         .then((res) => {
             setLoading(false)
             setProduct(res.data)
         }).catch((e) => {
           console.log(e)
         })

     },[slug])



     const AddToCartButton = () => {
        window.scrollTo(0, 0)
        let quantity = 1 

            dispatch(AddToCart({
            id: product._id,
            title: product.title,
            price: product.price,
            vendor: product.vendor,
            slug: product.slug,
            image: product.productimage,
            quantity: quantity
         }))


}

   useEffect(() => {
     
    addToCartSelector && addToCartSelector.map((data) => {
        console.log(data._id)
        return (
         data.id === product._id ? console.log("already added Item into cart") :   console.log("product added into cart"
         )        )

    })
   })

    return (
        <div className="container">
            {loading && <h1>Loading</h1>}
            <div className="container__singleproduct">
                <div className="container__singleproduct__images">
                    <div className="container__singleproduct__image">
                        <img src={product.productimage} alt={product.slug}/>
                    </div>
                </div>
                <div className="container__singleproduct__description">
                  <div className="container__singleproduct__description__title">
                        <h4>{product.title}</h4>
                  </div>
                  <div className="container__singleproduct__description__vendor">
                      <h6>{product.vendor}</h6>
                  </div>
                    <div className="container__singleproduct__description__price">
                        <p>₹{product.price}</p>
                    </div>
                    <div className="container__singleproduct__add_to_cart_form">
                       <div className="container__singleproduct__add_to_cart__button">
                           <button onClick={AddToCartButton}>ADD TO CART</button>
                       </div>
                       <div className="container__singleproduct__buy_now__button">
                            <button>BUY NOW</button>
                       </div>
                    </div>
                    <div className="container__singleproduct__description__productdetail">
                         <h5>Product Detail:</h5>
                         <p>{product.description}</p>
                    </div>
                      
                </div>
            </div>
        </div>
    )
}

export default SingleProduct