import React, { useState } from "react";

const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id, title);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex justify-between items-center">
        <label>Title : </label>
        <input
          className="border-[1px] border-black rounded-lg"
          value={title}
          onChange={handleChange}
        />
        <button className="px-2 py-1 rounded-lg bg-teal-400 text-white">
          Save
        </button>
      </form>
    </div>
  );
};

export default BookEdit;
