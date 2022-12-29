import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [likeCounter, setLikeCounter] = useState(20);

  function likeClickHandler() {
    var count = likeCounter + 1;
    setLikeCounter(count);
  }
  return (
    <div className="App">
      <button onClick={likeClickHandler}>counter</button>
      <h2>{likeCounter}</h2>
    </div>
  );
}
