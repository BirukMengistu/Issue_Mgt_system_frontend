import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const CASE_URL = 'https://localhost:7052/api/AssignCases'


export const fetchCaseStatus = createAsyncThunk('cases/fetchCaseStatus', async () => {
    const response = await axios.get(CASE_URL);
    console.log(response.data);
           return response.data
})



export const AssignCaseUser = createAsyncThunk('cases/assignCaseUser', async (initialCase) => {
    const response = await axios.post(CASE_URL, initialCase)
    return response.data
})


const casestatusSlices = createSlice({
    name: 'assignCase',
    initialState :{
    },
    reducers: {
        CaseAssign: {
            reducer(state, action) {
                state.assignCase.push(action.payload)
           }}
        },//end reducers
    extraReducers(builder) {
        builder.addCase(AssignCaseUser.fulfilled, (state, action) =>
                        {   
                     console.log('action payload', action.payload)
                     return action.payload;
                 })
      
    }})

export const selectAllCases = (state) => state.assignCase;
export const { CaseAssign } = casestatusSlices.actions;
export default casestatusSlices.reducer;
