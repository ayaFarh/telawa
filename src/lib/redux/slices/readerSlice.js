import { API } from "@/app/_Component/Api/Api"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const getAllReader = createAsyncThunk(
  "reader/getAllReader",
  async (searchName = "", thunkAPI) => {
    try {
      const { data } = await axios.get(
        `https://mp3quran.net/api/v3/reciters?language=ar&search=${encodeURIComponent(searchName)}`
      );
      return data.reciters;
    } catch (err) {
      console.error(err);
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);



export const getSpacialReader=createAsyncThunk("reader/getSpacialReader",async(id)=>{
        try {
          
           const{data}=await axios.get(`https://mp3quran.net/api/v3/reciters?language=ar&reciter=${id}`)
           return data.reciters

        }catch(err){
            console.log(err)
        }
})


const readerSlice=createSlice({
   name: "reader",
  initialState: {
    allReaders: [],
    reader: [],
    loading: false,
    error: false,
  },
  reducers: {
    setReader: (state, action) => {
      state.reader = action.payload;
    },
  },
    extraReducers:(builder)=>{
        builder.addCase(getAllReader.fulfilled,(state,action)=>{
            state.allReaders=action.payload
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