import React, { useState } from "react";

const ChildComponent = ({ handleClick }) => {
  const [input, setInput] = useState("");

  return (
    <div>
      <p>Child Component</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => handleClick(input)}>ADD</button>
    </div>
  );
};

export default ChildComponent;
