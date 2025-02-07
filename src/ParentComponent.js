import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [childData, setChildData] = useState("");

  const handleClick = (data) => {
    setChildData(data);
  };

  return (
    <div>
      <span>Parent Component</span>
      <p>Data from child: {childData}</p>
      <ChildComponent handleClick={handleClick} />
    </div>
  );
};

export default ParentComponent;
