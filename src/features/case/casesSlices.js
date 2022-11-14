import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const CASE_URL = 'https://localhost:7052/api/Case'


export const fetchCases = createAsyncThunk('cases/fetchCases', async () => {
    const response = await axios.get(CASE_URL);
    console.log(response.data);
           return response.data
})



export const addNewCase = createAsyncThunk('cases/addNewCase', async (initialCase) => {
    const response = await axios.post(CASE_URL, initialCase)
    return response.data
})


const caseSlices = createSlice({
    name: 'cases',
    initialState :{
    },
    reducers: {
        CaseAdded: {
            reducer(state, action) {
                state.user.push(action.payload)
           }}
        },//end reducers
    extraReducers(builder) {
        builder.addCase(fetchCases.fulfilled, (state, action) =>
                        {   
                     console.log('action payload', action.payload)
                     return action.payload;
                 })
      
    }})

export const selectAllCases = (state) => state.case;
export const { CaseAdded } = caseSlices.actions;
export default caseSlices.reducer;


