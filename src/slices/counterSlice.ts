import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export interface CounterState {
    count: number,
    error: string | null
}
//default state define

const initialState: CounterState = {
    count: 0,
    error: null
}
//poddak awt wela inna me process eka iwara wenakan
//end point ekka - backend call karala data get karanwa ha samanai

export const incrementAsync = createAsyncThunk('counter/incrementAsync', async (count: number) => {
   await new Promise(resolve => setTimeout(resolve, 2000));
   return count;
});

//Define with the actionmanaged
// interface CounterAction {
//     type: 'increment' | 'decrement',
//
// }

//current count ekata 1 k ethu karala new Count ekata dagannwa
export const  counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment(state){
            const newCount =  state.count + 1;
            const  hasError = newCount > 5;
            if (hasError){ //Faild Invalid Scenario
                state.error = 'Maximum value reached';
            } else { //Success Valid Scenario
                state.count = newCount;
                state.error = null;
            }


        }
        ,
        decrement(state){
            const newCount = state.count - 1
            const hasError = newCount < 0;
            if(hasError){
                state.error = 'Minimum value reached';
            } else {
                state.count = newCount;
                state.error = null;
            }

        }

    },
    extraReducers: (builder) => {
        builder.addCase(incrementAsync.pending, ( ) => {
            console.log("incrementAsync is " + "still pending");
        })
            .addCase(incrementAsync.fulfilled, (state, action) => {
               console.log("incrementAsync is still fullfilled ");
                state.count += action.payload; //Increment by the payload value
                // current count
                // by the value provide

            })
            .addCase(incrementAsync.rejected, (state, action) => {
                 console.log("incrementAsync is still rejected ");
            })
    }

});
export const  { increment, decrement} = counterSlice.actions;

export  default counterSlice.reducer;
//
//  export function counterSlice(state = initialState, action: CounterAction ) {
//     const {type} = action;
//     switch (type) {
//         case "increment":{
//             const newCount =  state.count + 1;
//             const  hasError = newCount > 5;
//
//             return {
//                 ...state,
//                 count: hasError ? state.count : newCount,
//                 error: hasError ? 'Maximum count reached' : null
//             }
//         }
//         case "decrement":{
//             const newCount = state.count - 1
//             const hasError = newCount < 0;
//             return {
//                 ...state,
//                 count: hasError ? state.count : newCount,
//                 error: hasError ? 'Minimum count reached' : null
//             }
//         }
//         default: {
//             return  state;
//         }
//     }
//
// }
