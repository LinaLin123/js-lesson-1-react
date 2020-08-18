import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyButton from "./components/MyButton";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Vad blir det till middag?</p>
        <h1> Sushi!</h1>

        <MyButton title="K" />
        <MyButton title="Hå" />
        <MyButton title="Hej" />
        <MyButton title="red"/>

        <h2>
          <a href="https://alltommat.se/recept/sushi/"> Kika in recepten</a>
        </h2>

        <img src="./mat.jpeg" alt="food" width="300" height="400" />

        <p>
          <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
