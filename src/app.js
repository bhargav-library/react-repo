import Body from "./body";
import React from "react";
import ReactDOM from "react-dom/client";
const AppLayout = ()=>{
    return(
        <div className ="app">
         <Body/>         
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);