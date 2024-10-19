import { configureStore } from "@reduxjs/toolkit";
import productReducer from "@/utils/productSlice"

export const makeStore = () => {
    return configureStore({
        reducer: productReducer
    }) 
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']