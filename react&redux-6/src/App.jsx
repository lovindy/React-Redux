import React, { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";
const App = () => {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-12 mt-36">
      <div className="flex justify-center items-center">
        <BookCreate />
      </div>
      <BookList />
    </div>
  );
};

export default App;
