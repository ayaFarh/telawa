import { API } from "@/app/_Component/Api/Api"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const getAllReader=createAsyncThunk("reader/getAllReader",async()=>{
        try {
          
           const{data}=await axios.get(`${API.Allreciter}`)
           console.log(data.reciters);
           
           return data.reciters
        }catch(err){
            console.log(err)
        }
})


export const getSpacialReader=createAsyncThunk("reader/getSpacialReader",async(id)=>{
        try {
          
           const{data}=await axios.get(`https://mp3quran.net/api/v3/reciters?language=ar&reciter=${id}`)
           return data.reciters

        }catch(err){
            console.log(err)
        }
})


const readerSlice=createSlice({
    name:"reader",
    initialState:{
        reader:[],
        loading:false,
        error:false
    },
    reducers:{
        setReader:(state,action)=>{
            state.reader=action.payload
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(getAllReader.fulfilled,(state,action)=>{
            state.reader=action.payload
            state.loading=false
        })
        .addCase(getAllReader.rejected,(state,action)=>{
            state.error=true
        })
        .addCase(getAllReader.pending,(state,action)=>{
            state.loading=true
        })
        .addCase(getSpacialReader.fulfilled,(state,action)=>{
            state.reader=action.payload
            state.loading=false
        })
        .addCase(getSpacialReader.rejected,(state,action)=>{
            state.error=true
        })
        .addCase(getSpacialReader.pending,(state,action)=>{
            state.loading=true
        })
    }
})

export const {setReader}=readerSlice.actions
export default readerSlice.reducer