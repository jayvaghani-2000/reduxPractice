import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
   loading: false,
   data: []
};

//async task

const productSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      // setProduct(state, action) {
      //    // can't call fetch action here as reducer are synchronous
      //    state.data = action.payload
      // },
      // setLoading(state, action){
      //    state.loading = action.payload
      // }
   }, 
   extraReducers: (builder) => {
      builder.addCase(fetchProduct.pending, (state, action) =>{
         state.loading = true
      }).addCase(fetchProduct.fulfilled, (state,action)=>{
         state.data = action.payload
         state.loading = false
      }).addCase(fetchProduct.rejected,(state, action) =>{
         state.loading = false
      })
   }
})

// export const { setProduct, setLoading } = productSlice.actions

export default productSlice.reducer;


//thunk
//Built-in : 2 way

//1st way
// export const fetchProduct = () => {
//    return async(dispatch, getState) => {
//       dispatch(setLoading(true))

//       // getState() is function return current state
//       try {
//          const res = await axios.get(`https://api.escuelajs.co/api/v1/products`)
//          // setProduct(res.data.slice(0, 20))
//          dispatch(setProduct(res.data.slice(0,20)))
//       } catch (err) {

//       } finally {
//          dispatch(setLoading(false))
//       }
//    }
// }

//2nd way
export const fetchProduct = createAsyncThunk('products/fetch', 
   async() => {
      const res = await axios.get(`https://api.escuelajs.co/api/v1/products`)
      return res.data.slice(0,20)
   }
)
