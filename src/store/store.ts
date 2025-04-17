import {configureStore} from "@reduxjs/toolkit";
import createApiSlice from './createApiSlice.ts'

export const store  =  configureStore({
    reducer:{
        food:createApiSlice,


    }
})