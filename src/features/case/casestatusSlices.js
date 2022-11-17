import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const ASSIGN_CASE_URL = 'https://localhost:7052/api/AssignCases'

const initialState = []

export const fetchCaseStatus = createAsyncThunk('caseStatus/fetchCaseStatus', async () => {
    const response = await axios.get(ASSIGN_CASE_URL );
   
           return response.data
})



export const assignNewCaseUser = createAsyncThunk('caseStatus/AssignCaseUser', async (initialCase) => {
    const response = await axios.post(ASSIGN_CASE_URL, initialCase)
    return response.data
})


const casestatusSlices = createSlice({
    name: 'caseStatus',
    initialState,
    reducers: {
        CaseAssign: {
            reducer(state, action) {
                state.caseStatus.push(action.payload)
           }}
        },//end reducers
    extraReducers(builder) {
        builder.addCase(fetchCaseStatus.fulfilled, (state, action) =>
                        {   
                     console.log('action payload', action.payload)
                     return action.payload;
                 })
      builder.addCase(assignNewCaseUser.fulfilled, (state, action) =>
                 {   
                    state.status = 'succeeded'
                    console.log('action payload assgin case', action.payload)
                    state.caseStatus.push(action.payload);
          })
      
        }})

export const selectAllAssginCases = (state) => state.caseStatus;
export const { CaseAssign } = casestatusSlices.actions;
export default casestatusSlices.reducer;
