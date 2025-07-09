import { API } from "@/app/_Component/Api/Api"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const getAllDirect=createAsyncThunk("reader/getAllDirect",async()=>{
        try {
          
           const{data}=await axios.get(`https://mp3quran.net/api/v3/live-tv`)
           console.log(data);
           
           return data
        }catch(err){
            console.log(err)
        }
})




const directSlice=createSlice({
    name:"direct",
    initialState:{
       direct:[],
        loading:false,
        error:false
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllDirect.fulfilled,(state,action)=>{
            state.direct=action.payload
            state.loading=false
        })
        .addCase(getAllDirect.rejected,(state,action)=>{
            state.error=true
        })
        .addCase(getAllDirect.pending,(state,action)=>{
            state.loading=true
        })
       
    }
})


export default directSlice.reducer