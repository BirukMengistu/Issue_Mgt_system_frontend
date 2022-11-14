import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USER_ADDRESS_URL = 'https://localhost:7052/api/Addresss';


const initialState = []

export const fetchAddress = createAsyncThunk('users/fetchAddress', async () => {
    const response = await axios.get(USER_ADDRESS_URL);
        return response.data
})
export const addNewAddress = createAsyncThunk('users/addNewAddress', async (initialPost) => {
    const response = await axios.post(USER_ADDRESS_URL, initialPost)
    return response.data
})


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        userAdded: {
            reducer(state, action) {
                state.address.push(action.payload)
           }}
        },
        
    extraReducers(builder) {
       
        builder.addCase(fetchAddress.fulfilled, (state, action) =>
                 {   
               console.log('action payload address', action.payload)
               return action.payload;
                })        
         builder.addCase(addNewAddress.fulfilled, (state, action) => {
            state.status = 'succeeded'
            // Adding date and reactions
            // Add any fetched posts to the array
           state.address.push(action.payload);
        })
    }})


export const selectAllAddress = (state)=>state.address;
export const { userAdded } = usersSlice.actions;
export default usersSlice.reducer;
