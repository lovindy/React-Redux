import React, { useState, useContext } from "react";
import BooksContext from "../context/books";
// recieve the props from the app.jsx
const BookCreate = () => {
  const [title, seTitle] = useState("");
  const { handleCreateBook } = useContext(BooksContext); // Call function from context

  const handleChange = (event) => {
    seTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCreateBook(title);
    seTitle("");
  };
  return (
    <div className="bg-teal-500 rounded-xl shadow-xl p-12 text-white">
      <h1>Add a Book</h1>
      <form className="flex flex-col">
        <label>Titile</label>
        <input
          className="rounded-md shadow-xl border-2 text-black border-black my-2"
          value={title}
          onChange={handleChange}
        />
        <button
          onClick={handleSubmit}
          className="bg-teal-400 rounded-xl shadow-xl p-2 mt-2">
          Create
        </button>
      </form>
    </div>
  );
};

export default BookCreate;
