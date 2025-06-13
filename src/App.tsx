import React, {createContext} from 'react';
import './App.css'
import {Counter} from "./Component/Counter/Counter";


export const  MessageContext = createContext('');

function App() {

    const message = "Helllo There!";
   return(
       <MessageContext.Provider value={message}>
           <div className={"app"}>
               {/*<h1>This is App component</h1>*/}
               <Counter/>
           </div>
       </MessageContext.Provider>
   );
}

export default App;

