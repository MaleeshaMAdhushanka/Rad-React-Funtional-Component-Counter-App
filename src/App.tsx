import React from 'react';
import './App.css'
import {Counter} from "./Counter/Counter";

function App() {
   return(
       <div className={"app"}>
         {/*<h1>This is App component</h1>*/}
           <Counter data={"Saman"}/>
       </div>
   );
}
export  default App;

