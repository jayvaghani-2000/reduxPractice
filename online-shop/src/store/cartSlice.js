import { createSlice } from "@reduxjs/toolkit"

const initialState = [];

//async task

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            // return [...state, action.payload]
            state.push(action.payload)  //mutate in toolkit  
        },
        remove(state, action) {
            //state = state+ ... will not work as demage refernce of local property
           return state.filter(item => item.id !== action.payload )

        }
    }
})

export const {add , remove} = cartSlice.actions

export default cartSlice.reducer;