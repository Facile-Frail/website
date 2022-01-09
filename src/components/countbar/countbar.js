import React, { useState } from "react";
import "./countbar.css";

export default function Countbar() {
  const [count, setCount] = useState(0);

  function addCounter(){
      setCount(count+1);
  }

  function minusCounter(){
    setCount(count-1);
}

  return (
    <>
      <div className="counterMain">
        <h1>Facile Frail Counter</h1>
        <input type="text" placeholder="0" value={count} name="counter" id="counter" />
        <div className="changeBtn">
          <input type="button" value="UP VOTE" className="btn" onClick={addCounter}/>
          <input type="button" value="DOWN VOTE" className="btn" onClick={minusCounter}/>
        </div>
      </div>
    </>
  );
}
