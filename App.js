import React from "react";
import ReactDOM from "react-dom/client";

//Reacct Element
// const heading = <h1 className="head" tabIndex="3">This is reactJS</h1>


//React Functional Component 
const TitleComponent = () => (
    <h1>This is Title</h1>
);

const HeadingComponent = () => (
    <div className="continer">
        {/* Component composition:- inside component call another companent   */}
        <TitleComponent /> 
        {/*  */}
        <h1 className="head">This Is Functional React Component</h1>
    </div>
);
 
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent />)

