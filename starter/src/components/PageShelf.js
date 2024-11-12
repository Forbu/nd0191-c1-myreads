import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import BookShelf from "./BookShelf";
import { useState, useEffect } from "react";
const PageShelf = ({addbook}) => {

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


  return <div className="list-books">
  <div className="list-books-title">
    <h1>MyReads</h1>
  </div>
  <div className="list-books-content">
    <div>
      <BookShelf title="Currently Reading" books={books.filter((book) => book.shelf === "currentlyReading")} addbook={addbooktoShelf} />
      <BookShelf title="Want to Read" books={books.filter((book) => book.shelf === "wantToRead")} addbook={addbooktoShelf} />
      <BookShelf title="Read" books={books.filter((book) => book.shelf === "read")} addbook={addbooktoShelf} />
    </div>
  </div>
  <div className="open-search">
    <Link to="/search">Add a book</Link>
  </div>
</div>;
};

export default PageShelf;
