import React, { useState, useEffect } from "react";

function Sample() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  useEffect(() => {
    console.log(`count is ${count}`);
  });
  return (
    <div>
      <button onClick={handleClick}>count is {count}</button>
    </div>
  );
}

export default Sample;
