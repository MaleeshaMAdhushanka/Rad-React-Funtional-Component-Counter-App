 import './counter.css';
 import {useEffect, useReducer, useState} from "react";
 import {Message} from "../Message/Message";
 import {counterReducer} from "../../Reducers/counterReducer";
 import {useDispatch, useSelector} from "react-redux";
 import {CounterState} from "../../store/store";
 import {decrement, increment} from "../../actions/counterAction";

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
   //  const [state, dispatch]  = useReducer(
   //      counterReducer,  {
   //          count: 0,
   //          error: null
   //      }
   //
   //  );


   const  dispatch = useDispatch();

   const count = useSelector((state : CounterState) => state.count);

   const  error = useSelector((state: CounterState) => state.error);


    return (
        <div className={"counter"}>
            <h1>React counter(Using Reducer Components)</h1>
            <h1>Count: {count}</h1>
            {error && <span className="error">{error}</span> }
            <div>
                <button className="button" onClick={()=> dispatch(increment())} >+</button>
                <button className="button" onClick={() => dispatch(decrement())} >-</button>
            </div>
            <Message />
        </div>
    );
}