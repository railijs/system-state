import { useState } from "react";

function App() {
  const [result, setResult] = useState(0);
  function addGang() {
    setResult(result + 1);
    console.log("gangs = " + result);
  }

  function removeGang() {
    setResult(result - 1);
    console.log("gangs = " + result);
  }

  return (
    <div className="App">
      <button onClick={addGang}>gang +1</button>
      <button onClick={removeGang}>gang -1</button>
      <input type="text">ieraksti skaitli</input>

      <h1>gangs = {result}</h1>
    </div>
  );
}

export default App;
