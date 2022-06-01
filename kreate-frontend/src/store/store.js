import {configureStore} from "@reduxjs/toolkit"
import addToCartReducer from "../features/cart/addToCartSlice"

export default configureStore({
    reducer: {
        addToCart: addToCartReducer
    }
})