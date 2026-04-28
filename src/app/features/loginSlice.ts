import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supabase from "../../../supabase";
import { toast } from "sonner";


interface IState{
    isLoading: boolean,
    data: any
    error: any
}

const initialState:IState= {
    isLoading: false,
    data: {},
    error: ""
}

const loginUser = createAsyncThunk(
    'login/loginUser',
    async (formData:{email:string, password:string}, thunkAPI) => {
        try {
            const {data,error}=await supabase.auth.signInWithPassword({
                email: formData.email,
                password: formData.password,
            })
            console.log(data);
            if(error) throw error
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    },
)

const loginSlice= createSlice({
    name: 'login',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        // pending
        builder.addCase(loginUser.pending, (state:IState)=>{
            state.isLoading= true
        })
        // fulfileed
        builder.addCase(loginUser.fulfilled, (state:IState, action)=>{
            state.isLoading= false
            state.data= action.payload
            state.error=null
            localStorage.setItem('token', action.payload.session.access_token)
            toast.promise<{ name: string }>(() =>
                new Promise((resolve) =>
                    setTimeout(() => resolve({ name: "Event" }), 1000)
                ),   
                {loading: "Loading...", success: () => `Welcome Back 👋`, error: "Error", position:"top-center",  description: "You’re now logged in. Start exploring products and enjoy your shopping experience.", className:"text-black"},
            );
        })
        // rejected
        builder.addCase(loginUser.rejected, (state:IState, action)=>{
            state.isLoading= false
            state.data={}
            state.error= action.payload?.message
            toast.error(state.error, {position:"top-center"})
            // console.log(action.payload.message);
            
        })
    }
})
export default loginSlice.reducer
export {loginUser}