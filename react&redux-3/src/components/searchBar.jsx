import React, { useState } from "react";

const searchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term)
  };
  const handleChange = (event) => {
    setTerm(event.target.value); // update the state
  };
  return (
    <div className="w-full flex items-center justify-center">
      <form onSubmit={handleFormSubmit}>
        <input className="border-2 rounded-full border-black hover:border-green-500 duration-300" value={term} onChange={handleChange} />
      </form>
    </div>
  );
};

export default searchBar;
