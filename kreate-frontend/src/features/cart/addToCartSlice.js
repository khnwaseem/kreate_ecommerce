import {createSlice} from "@reduxjs/toolkit"


const initialState = []


const addToCartSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        AddToCart: (state,action) => {
          state.push(action.payload)
        }
    }
})

export const {AddToCart} = addToCartSlice.actions

export default addToCartSlice.reducer