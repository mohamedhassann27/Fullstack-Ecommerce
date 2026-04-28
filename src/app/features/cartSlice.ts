import type { IProduct } from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IProduct[]= JSON.parse(localStorage.getItem('cartProducts')|| '[]')

const cartSlice= createSlice({
    name:'cart',
    initialState,
    reducers:{

        addProductToCart: (state, action)=>{
            // return [...state, {...action.payload, quntity:1}]
            const addedProduct= action.payload
            const existingProduct= state.find(item=>item.id==addedProduct.id)
            if(existingProduct){
                existingProduct.quantity+=1
            }else{
                state.push({...addedProduct, quantity:1})
            }
            localStorage.setItem('cartProducts', JSON.stringify(state))
        },

        removeProductFromCart: (state, action)=>{
            const newState= state.filter(item=> item.id != action.payload.id)
            localStorage.setItem('cartProducts', JSON.stringify(newState))
            return newState
        },

        increaseQuantity: (state, action)=>{
            const product= state.find(item=> item.id==action.payload.id)
            if(product) product.quantity+=1
            localStorage.setItem('cartProducts', JSON.stringify(state))
        },

        decreaseQuantity: (state, action)=>{
            const product= state.find(item=> item.id==action.payload.id)
            if(product) product.quantity-=1
            localStorage.setItem('cartProducts', JSON.stringify(state))
        }

    }
})

export default cartSlice.reducer
export const {addProductToCart, removeProductFromCart, increaseQuantity, decreaseQuantity}= cartSlice.actions 