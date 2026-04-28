// import { IProduct } from './../../interfaces';
import type { IProduct } from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";

const initialState:IProduct[]= JSON.parse(localStorage.getItem('wishlist') ||'[]')

const wishlistSlice= createSlice({
    name:'wishlist',
    initialState,
    reducers:{
        addProductToWishlist: (state, action)=>{
            const existingProduct= state.find((item:IProduct)=> item.id == action.payload.id)
            
            if(!existingProduct){
                state.push(action.payload)
                localStorage.setItem('wishlist', JSON.stringify(state))
            }
        },
        removeProductFromWishlist: (state, action)=>{
            const newState= state.filter(item=> item.id != action.payload)
            localStorage.setItem('wishlist', JSON.stringify(newState))
            return newState
        }
    }
})

export default wishlistSlice.reducer
export const {addProductToWishlist, removeProductFromWishlist}= wishlistSlice.actions