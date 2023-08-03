import { useRef } from "react";
import "./App.css";
import { useState } from "react";

function App() {

  let [name,setname] = useState("");

  let inputChange = (e) => {
    setname(e.target.value);
  }

  let clearInput = () => {
    setname("");
    hook.current.focus();

  }

  let colorChange = () => {
    hook.current.style.color = "yellow";
    hook.current.style.backgroundColor = "red";
  }

  let hook = useRef();
  console.log(hook);

  return (
    <div>
      <h2>UseRef</h2>
      <input ref={hook} onChange={inputChange} value={name} type="text"></input>
      <button onClick={clearInput}>Clear</button>
      <button onClick={colorChange}>Color Change</button>
    </div>
  );
}

export default App;
