import { useState, useEffect } from "react";

// 1. Create the useCounter hook
// pass initialCount as an argument
function useCounter(initialCount) {
  // 2. Find the non-jsx expression
  const [count, setCount] = useState(initialCount);
  useEffect(() => {
    console.log(`count is ${count}`);
  }, [count]);
  const incrementCount = () => setCount(count + 1);

  // 3. Return the object that contain the variable the component needs
  return {
    count,
    incrementCount,
  };
}

export default useCounter;

// 1. Create the useCounter hook
// 2. Find the non-jsx expression
// 3. Return the object that contain the variable the component needs
// 4. Call the hook, Destructure the properties in as arguments to the hook
// 5. return the jsx
