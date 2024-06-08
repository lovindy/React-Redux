import { createContext, useState } from "react";
import axios from "axios";

// create context
const BooksContext = createContext();
// create new custom provider
function Provider({ children }) {
  const [books, setBooks] = useState([]);
  // get books
  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };
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

  // collect all the function in one object
  const valueToShare = {
    books,
    fetchBooks,
    handleCreateBook,
    handleEditBook,
    handleDeleteBook,
  };

  return (
    // valueToShare is an object that contains all the functions
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider> // .Provider is a component that allows us to share data between components and its children.
  );
}

export { Provider };
export default BooksContext;
