import React, { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";
const App = () => {
  const [books, setBooks] = useState([]);

  // get books
  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  // create books
  const handleCreateBook = async (title) => {
    // make a request
    const response = await axios.post("http://localhost:3001/books", { title });
    const updateBooks = [
      ...books, // previous data
      response.data, // adding data from the response
    ];
    setBooks(updateBooks);
  };

  // edit books
  const handleEditBook = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    console.log(response);
    const updateBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data }; // if there're multiple user the data will update to them automatically
      }
      return book;
    });
    setBooks(updateBooks);
  };
  // delete books, in this case it also delete in the db.json file
  const handleDeleteBook = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updateBooks = books.filter((book) => book.id !== id);
    setBooks(updateBooks);
  };

  return (
    <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-12 mt-36">
      <div className="flex justify-center items-center">
        <BookCreate onCreate={handleCreateBook} />
      </div>
      <BookList
        books={books}
        onDelete={handleDeleteBook}
        onEdit={handleEditBook}
      />
    </div>
  );
};

export default App;
