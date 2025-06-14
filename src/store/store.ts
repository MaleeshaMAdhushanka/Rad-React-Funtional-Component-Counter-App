import {createStore} from "redux";
import {counterReducer} from "../Reducers/counterReducer";


export const  store = createStore(counterReducer);

//mohokarta reated dewal da store karanne

export type CounterState =  ReturnType<typeof counterReducer>