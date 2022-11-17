import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = 'https://localhost:7052/api/Users';



const initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get(USERS_URL);
    
       return response.data
})


export const addNewUser = createAsyncThunk('users/addNewUser', async (initialPost) => {
    const response = await axios.post(USERS_URL, initialPost)
    return response.data
})


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        userAdded: {
            reducer(state, action) {
                state.user.push(action.payload)
           }}
        },
        
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) =>
                        {   
                console.log('action payload user', action.payload)
                return action.payload;
                 })
           
         builder.addCase(addNewUser.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.user.push(action.payload);
        })
    }})

export const selectAllUsers = (state) => state.user;
export const { userAdded } = usersSlice.actions;
export default usersSlice.reducer;
