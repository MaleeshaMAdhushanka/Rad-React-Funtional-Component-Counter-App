export interface CounterState {
    count: number,
    error: string | null
}

//Define with the actionmanaged
interface CounterAction {
    type: 'increment' | 'decrement',

}

 export function counterReducer(state: CounterState, action: CounterAction ) {
    const {type} = action;
    switch (type) {
        case "increment":{
            const newCount =  state.count + 1;
            const  hasError = newCount > 5;

            return {
                ...state,
                count: hasError ? state.count : newCount,
                error: hasError ? 'Maximum count reached' : null
            }
        }
        case "decrement":{
            const newCount = state.count - 1
            const hasError = newCount < 0;
            return {
                ...state,
                count: hasError ? state.count : newCount,
                error: hasError ? 'Minimum count reached' : null
            }
        }
        default: {
            return  state;
        }
    }

}
