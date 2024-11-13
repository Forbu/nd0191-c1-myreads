import "./App.css";
import {Routes, Route } from "react-router-dom";
import PageShelf from "./components/PageShelf";
import PageSearch from "./components/PageSearch";
import Login from "./components/Login";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";

function App() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setBooks(books);
    });
  }, []);

  const addbooktoShelf = (book, shelf) => {
    // get the book id from the book object
    const bookId = book.id;

    console.log(book)

    // update the book shelf in the state
    const bookToUpdate = books.find((book) => book.id === bookId);
    bookToUpdate.shelf = shelf;
    setBooks([...books]);

    // add book to shelf in the database
    BooksAPI.update(book, shelf);
  }

  return (
      <Routes>
        <Route path="/shelf" element={<PageShelf addbooktoShelf={addbooktoShelf} books={books} />} />
        <Route path="/search" element={<PageSearch addbooktoShelf={addbooktoShelf} books={books} />} />
        <Route path="/" element={<Login />} />

      </Routes>
  );
}

export default App;
