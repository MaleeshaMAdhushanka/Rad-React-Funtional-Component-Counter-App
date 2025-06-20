import {combineReducers} from "redux";
import counterReducer from '../slices/counterSlice';
//refer karanawa
export const  rootReducer = combineReducers({
  counter: counterReducer,
//     TODO- add More Reducers here
    //combine kara result eka ganna yanne


});

export type RootState = ReturnType<typeof rootReducer>;