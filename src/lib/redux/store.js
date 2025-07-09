import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/authSlice";
import readerSlice from "./slices/readerSlice";
import direct from "./slices/directSlice";
import surah from "./slices/surhSlice";

   export const store =configureStore({
    reducer:{
        auth,
         reader: readerSlice,
         direct,
         surah
        
    }
   })