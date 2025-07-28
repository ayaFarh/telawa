import { API } from "@/app/_Component/Api/Api"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const getAllRadioReader=createAsyncThunk("radio/getAllRadio",async()=>{
        try {
          
           const{data}=await axios.get(`${API.radio}`)
           console.log(data);
           
           return data.radios
        }catch(err){
            console.log(err)
        }
})




const radioSlice=createSlice({
    name:"radio",
    initialState:{
       radio:[],
        loading:false,
        error:false
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllRadioReader.fulfilled,(state,action)=>{
            state.radio=action.payload
            state.loading=false
        })
        .addCase(getAllRadioReader.rejected,(state,action)=>{
            state.error=true
        })
        .addCase(getAllRadioReader.pending,(state,action)=>{
            state.loading=true
        })
        
    }
})


export default radioSlice.reducer