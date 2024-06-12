import React, { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";
import { produce } from "immer";

// declaring the type of action in each dispatch
const ICREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const CHANGE_VALUE_TO_ADD = "change-value-to-add";
const HANDLE_SUBMIT = "handle-submit";

function reducer(state, action) {
  // using switch case for action type
  switch (action.type) {
    // create case with immer library
    case ICREMENT_COUNT:
      state.count = state.count + 1;
      return;

    case DECREMENT_COUNT:
      state.count = state.count - 1;
      return;

    case CHANGE_VALUE_TO_ADD:
      state.valueToAdd = action.payload;
      return;
    case HANDLE_SUBMIT:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
    default:
      // throw new Error("unexpected action type : " + action.type);
      return state;
  }
}

function CounterReducerPage({ initialCount }) {
  // using useReducer with immer
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });
  console.log(state);
  const handleClick = () => {
    dispatch({
      type: ICREMENT_COUNT,
    });
  };
  const Decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };
  const handleChange = (event) => {
    const value = parseInt(event.target.value);
    dispatch({
      type: CHANGE_VALUE_TO_ADD,
      payload: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: HANDLE_SUBMIT,
    });
  };

  return (
    <Panel className="m-3">
      <h1>Count is {state.count}</h1>
      <div className="flex flex-row my-12">
        <Button onClick={handleClick} primary rounded>
          Increment
        </Button>
        <Button onClick={Decrement} danger rounded>
          Decrement
        </Button>
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <h1>Add a lot!</h1>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="border-black border-2 hover:border-blue-500 rounded"
        />
      </form>
      <Button onClick={handleSubmit} success rounded>
        Add in
      </Button>
    </Panel>
  );
}

export default CounterReducerPage;
