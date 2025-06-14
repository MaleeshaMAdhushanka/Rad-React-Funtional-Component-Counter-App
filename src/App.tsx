import React, {createContext} from 'react';
import './App.css'
import {Counter} from "./Component/Counter/Counter";
import {Provider} from "react-redux";
import {store} from "./store/store";


export const  MessageContext = createContext('');

function App() {

    const message = "Helllo There!";
   return(

       <Provider store={store}>
           <MessageContext.Provider value={message}>
               <div className={"app"}>
                    {/*<h1>This is App component</h1>*/}
                   <Counter/>
                </div>
           </MessageContext.Provider>


       </Provider>
       // <MessageContext.Provider value={message}>
       //     <div className={"app"}>
       //         {/*<h1>This is App component</h1>*/}
       //         <Counter/>
       //     </div>
       // </MessageContext.Provider>
   );
}

export default App;

