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
    let newBooks = [...books];
    const bookIndex = newBooks.findIndex((b) => b.id === book.id);
    
    if (bookIndex >= 0) {
      // Update existing book if it already exists
      newBooks[bookIndex].shelf = shelf;
    } else {
      // Add new book if it doesn't exist
      newBooks.push({ ...book, shelf });
    }
    
    setBooks(newBooks);
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
