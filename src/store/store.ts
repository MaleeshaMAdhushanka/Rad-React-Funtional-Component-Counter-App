import {createStore} from "redux";
import {counterSlice} from "../slices/counterSlice";
import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";
import {rootReducer} from "../reducers/rootReducer";

export const  store = configureStore( {
    reducer: rootReducer //product, cart, counter
});

//store eken root state eken type eka beluwa
export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;


//mohokarta reated dewal da store karanne

export type CounterState =  ReturnType<typeof counterReducer>