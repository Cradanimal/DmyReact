// Import react and reactDOM libraries 
// Import the react components
// Take the react component and render it on the screen

import React from "react";
import ReactDOM from "react-dom";

// function getButtonText(){
//     return 'Get Button Text';
// }

const App = () => {

    const buttonText = {text: 'Click Me'};
    const buttonStyle = {backgroundColor :'blue', color: 'white'};
    return (
        <div>
            <label className="label" htmlFor="name">Enter Name:</label>
            <input id="name" type="text"/>
            <button style={buttonStyle}>
                {buttonText.text}
            </button>
        </div>
    );
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);