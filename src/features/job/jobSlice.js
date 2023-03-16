


// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import {
//     addTransaction,
//     deleteTransaction,
//     editTransaction,
//     getTransactions,
// } from "./transactionAPI";


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addJob, deleteJob, editJob, getJobs } from "./jobApi";


// Declare initialState for Job
const initialState = {
    jobs:[],
    isLoading:false,
    isError:false,
    error:"",
    editing:{},

}

//==============Start AsyncThunk===============//

// Get all Job thunk
export const fetchJobs = createAsyncThunk(
    "job/fetchJobs", async () =>{
        const jobs = await getJobs();
        return jobs;
console.log(jobs);
    }
);

// Add Job thunk
export const createJob = createAsyncThunk(
    "job/createJob",
    async (data) => {
        const job = await addJob(data);
        return job;
    }
);

// Update Job thunk
export const changeJob = createAsyncThunk(
    "job/changeJob",
    async ({ id, data }) => {
        const job = await editJob(id, data);
        return job;
    }
);

// Delete Job Thunk
export const removeJob = createAsyncThunk(
    "job/removeJob",
    async (id) => {
        const job = await deleteJob(id);
        return job;
    }
);

//==============End AsyncThunk===============//



//==============Start JobSlice===============//
 const jobSlice = createSlice({
    name:"job",initialState,
    reducer:{
        editActive:(state,action)=>{
            state.editing = action.payload;
        },
        editInActive:(state)=>{
            state.editing = {};
        },
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchJobs.pending,(state)=>{
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(fetchJobs.fulfilled,(state,action)=>{
            state.isError = false;
            state.isLoading = false;
            state.jobs = action.payload;
        })
        .addCase(fetchJobs.rejected,(state,action)=>{
            state.isError = true;
            state.isLoading = false;
            // state.error = action.error?.message;
            state.error = "error";
            state.jobs = {};
        })
        .addCase(createJob.pending,(state)=>{
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(createJob.fulfilled,(state,action)=>{
            state.isError = false;
            state.isLoading = false;
            state.jobs.push(action.payload);
        })
        .addCase(createJob.rejected,(state,action)=>{
            state.isError = true;
            state.isLoading = false;
            // state.error = action.error?.message;
            state.jobs = {};
        })
        .addCase(changeJob.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(changeJob.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;

                // const indexToUpdate = state.jobs.findIndex(
                //     (t) => t.id === action.payload.id
                // );

                // state.jobs[indexToUpdate] = action.payload;
            })
            .addCase(changeJob.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                // state.error = action.error?.message;
            })
            .addCase(removeJob.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(removeJob.fulfilled, (state, action) => {
                console.log(action);
                state.isError = false;
                state.isLoading = false;

                // state.jobs = state.jobs.filter(
                //     (t) => t.id !== action.meta.arg
                // );
            })
            .addCase(removeJob.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                // state.error = action.error?.message;
            });
    }

 });

//==============End JobSlice===============//



// // create slice
// const transactionSlice = createSlice({
//     name: "transaction",
//     initialState,
//     reducers: {
//         editActive: (state, action) => {
//             state.editing = action.payload;
//         },
//         editInActive: (state) => {
//             state.editing = {};
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchTransactions.pending, (state) => {
//                 state.isError = false;
//                 state.isLoading = true;
//             })
//             .addCase(fetchTransactions.fulfilled, (state, action) => {
//                 state.isError = false;
//                 state.isLoading = false;
//                 state.transactions = action.payload;
//             })
//             .addCase(fetchTransactions.rejected, (state, action) => {
//                 state.isLoading = false;
//                 state.isError = true;
//                 state.error = action.error?.message;
//                 state.transactions = [];
//             })
//             .addCase(createTransaction.pending, (state) => {
//                 state.isError = false;
//                 state.isLoading = true;
//             })
//             .addCase(createTransaction.fulfilled, (state, action) => {
//                 state.isError = false;
//                 state.isLoading = false;
//                 state.transactions.push(action.payload);
//             })
//             .addCase(createTransaction.rejected, (state, action) => {
//                 state.isLoading = false;
//                 state.isError = true;
//                 state.error = action.error?.message;
//             })
//             .addCase(changeTransaction.pending, (state) => {
//                 state.isError = false;
//                 state.isLoading = true;
//             })
//             .addCase(changeTransaction.fulfilled, (state, action) => {
//                 state.isError = false;
//                 state.isLoading = false;

//                 const indexToUpdate = state.transactions.findIndex(
//                     (t) => t.id === action.payload.id
//                 );

//                 state.transactions[indexToUpdate] = action.payload;
//             })
//             .addCase(changeTransaction.rejected, (state, action) => {
//                 state.isLoading = false;
//                 state.isError = true;
//                 state.error = action.error?.message;
//             })
//             .addCase(removeTransaction.pending, (state) => {
//                 state.isError = false;
//                 state.isLoading = true;
//             })
//             .addCase(removeTransaction.fulfilled, (state, action) => {
//                 console.log(action);
//                 state.isError = false;
//                 state.isLoading = false;

//                 state.transactions = state.transactions.filter(
//                     (t) => t.id !== action.meta.arg
//                 );
//             })
//             .addCase(removeTransaction.rejected, (state, action) => {
//                 state.isLoading = false;
//                 state.isError = true;
//                 state.error = action.error?.message;
//             });
//     },
// });

export default jobSlice.reducer;
export const { editActive, editInActive } = jobSlice.actions;
