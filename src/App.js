import React from "react";
import "./App.css";
import Bulb from "./containers/Bulb";

function App() {
  return (
    <div className="App">
      <Bulb id={1} />
      <Bulb id={2} />
      <Bulb id={3} />
      <Bulb id={4} />
    </div>
  );
}

export default App;
