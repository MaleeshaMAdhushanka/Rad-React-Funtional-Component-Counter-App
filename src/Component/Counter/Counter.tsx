 import './counter.css';
 import {useEffect, useReducer, useState} from "react";
 import {Message} from "../Message/Message";
 import {counterReducer} from "../../Reducers/counterReducer";

 //
 //state object define

export function Counter() {

    // const [count, setCount] = useState(0);
    //
    // useEffect(()=> {
    //     alert("componentDidMount:" + "Component has been mounted" + props.data);
    //
    //     return() => {
    //         alert("componentWillUnmount:" + "Component will be unmounted");
    //     }
    //
    // }, []); //Run only one time(Empty dependency )


    // useEffect(() => {
    //     alert("componentDidUpdate: " + "Count has been updated!");
    // }, [count]);

   // const increment = () => {
   //     setCount((pervCount) => pervCount + 1);
   //
   //  }
   //
   //  const  decrement= () => {
   //      setCount((pervCount) => pervCount + -1);
   //
   //  }
    const [state, dispatch]  = useReducer(
        counterReducer,  {
            count: 0,
            error: null
        }

    );


    return (
        <div className={"counter"}>
            <h1>React counter(Using Reducer Components)</h1>
            <h1>Count: {state.count}</h1>
            {state.error && <span className="error">{state.error}</span> }
            <div>
                <button className="button" onClick={()=> dispatch({type: 'increment'}) } >+</button>
                <button className="button" onClick={() => dispatch({type: 'decrement'})} >-</button>
            </div>
            <Message />
        </div>
    );
}