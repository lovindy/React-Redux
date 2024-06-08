import React from "react";
import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";

const BookList = () => {
  // custom hook
  const { books } = useBooksContext();
  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className="grid grid-cols-3 gap-4">{renderedBooks}</div>;
};

export default BookList;
