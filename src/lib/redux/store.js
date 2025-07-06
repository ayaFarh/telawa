import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/authSlice";
import readerSlice from "./slices/readerSlice";

   export const store =configureStore({
    reducer:{
        auth,
         reader: readerSlice
        
    }
   })