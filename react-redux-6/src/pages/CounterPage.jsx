import React from "react";
import Button from "../components/Button";
import useCounter from "../hook/use-counter";

// pass initialCount as an argument
function Sample({ initialCount }) {
  // 4. Call the hook, Destructure the properties in as arguments to the hook
  const { count, incrementCount } = useCounter(initialCount);
  // 5. return the jsx
  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={incrementCount} rounded primary>
        Increment
      </Button>
    </div>
  );
}

export default Sample;

// 1. Create the useCounter hook
// 2. Find the non-jsx expression
// 3. Return the object that contain the variable the component needs
// 4. Call the hook, Destructure the properties in as arguments to the hook
// 5. return the jsx
