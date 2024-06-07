import React, { useState, useContext } from "react";
import ShowEdit from "./BookEdit";
import BooksContext from "../context/books";
const BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { handleDeleteBook } = useContext(BooksContext);
  const handleDeleteClick = () => {
    handleDeleteBook(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = () => {
    setShowEdit(false);
  };
  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <ShowEdit onSubmit={handleSubmit} book={book} />;
  }
  return (
    <div className="bg-slate-50 border-black border-2 rounded-lg p-4 shadow-lg space-y-4">
      <img
        className="rounded-lg"
        src={`https://picsum.photos/seed/${book.id}/300/200`}
        alt="books"
      />
      <div>{content}</div>
      <div className="space-x-4">
        <button
          className="px-2 py-1 bg-teal-400 rounded-lg text-white"
          onClick={handleDeleteClick}>
          Delete
        </button>
        <button
          className="px-2 py-1 bg-teal-400 rounded-lg text-white"
          onClick={handleEditClick}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default BookShow;
