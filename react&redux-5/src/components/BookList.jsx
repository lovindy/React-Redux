import React from "react";
import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../context/books";

const BookList = ({ books, onDelete, onEdit }) => {
  const value = useContext(BooksContext);

  const renderedBooks = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    );
  });

  return (
    <div className="grid grid-cols-3 gap-4">
      {renderedBooks} {value}
    </div>
  );
};

export default BookList;
