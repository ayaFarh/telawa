import { API } from "@/app/_Component/Api/Api"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const getAllSurah=createAsyncThunk("surah/getAllSurah",async()=>{
        try {
          
           const{data}=await axios.get(`https://mp3quran.net/api/v3/suwar?language=ar`)
          
           
           return data.suwar

        }catch(err){
            console.log(err)
        }
})

export const getSurahDetails=createAsyncThunk("surah/getSurahDetails",async(id)=>{
        try {
          
           const{data}=await axios.get(`https://mp3quran.net/api/v3/ayat_timing?surah=${id}&read=5`) 
           return data
        }catch(err){
            console.log(err)
        }
})


const surahSlice=createSlice({
    name:"surah",
    initialState:{
       surah:[],
        loading:false,
        error:false
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllSurah.fulfilled,(state,action)=>{
            state.surah=action.payload
            state.loading=false
        })
        .addCase(getAllSurah.rejected,(state,action)=>{
            state.error=true
        })
        .addCase(getAllSurah.pending,(state,action)=>{
            state.loading=true
        })
        .addCase(getSurahDetails.fulfilled,(state,action)=>{
            state.surah=action.payload
            state.loading=false
        })
        .addCase(getSurahDetails.rejected,(state,action)=>{
            state.error=true
        })
        .addCase(getSurahDetails.pending,(state,action)=>{
            state.loading=true
        })
       
    }
})


export default surahSlice.reducer