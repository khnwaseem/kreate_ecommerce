import React from "react"
import {Routes,Route} from "react-router-dom"
import Layout from "./components/layout"

import HomePage from "./containers/Home"
import Products from "./components/productpage/products"
import SingleProduct from "./components/productpage/singleproduct"
import Cart from "./components/cart/cart"

const Routers = () => {
    return (
        <React.Fragment>
            <Layout>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/products" element={<Products />} ></Route>
            <Route path="/product/:slug" element={<SingleProduct />}></Route>
            <Route path="/cart"  element={<Cart />} ></Route>
        </Routes>
        </Layout>
        </React.Fragment>
    )
}

export default Routers