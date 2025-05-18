 import './counter.css';
 import {useEffect, useState} from "react";

export function Counter(props: any) {

    const [count, setCount] = useState(0);

    useEffect(()=> {
        alert("componentDidMount:" + "Component has been mounted" + props.data);

        return() => {
            alert("componentWillUnmount:" + "Component will be unmounted");
        }

    }, []); //Run only one time(Empty dependency )


    useEffect(() => {
        alert("componentDidUpdate: " + "Count has been updated!");
    }, [count]);

   const increment = () => {
       setCount((pervCount) => pervCount + 1);

    }

    const  decrement= () => {
        setCount((pervCount) => pervCount + -1);

    }


    return (
        <div className={"counter"}>
            <h1>React counter(Functional Components)</h1>
            <h1>Count: {count}</h1>
            <div>
                <button className="button" onClick={increment}>+</button>
                <button className="button" onClick={decrement}>-</button>
            </div>
        </div>
    );
}