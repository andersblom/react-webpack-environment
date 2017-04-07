import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    render() {
        return (
            <h1>Hey</h1>
        );
    }
}

const target = document.getElementById("app");

ReactDOM.render(<App />, target);