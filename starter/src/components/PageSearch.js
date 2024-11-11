// stateful component
import { useState } from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

import * as BooksAPI from "../BooksAPI";    

const PageSearch = () => {

    // state variables
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

  const searchbooks = (query) => {

    // no big search
    if (query === "") {
        setResults([]);
        return;
    }

    BooksAPI.search(query, 10).then((books) => {
        // error handling
        if (books.error) {
            setResults([]);
        } else {
            setResults(books);
        }
    });
  }


  const addbooktoShelf = (book, shelf) => {

    // add book to shelf in the database
    BooksAPI.update(book, shelf);
  }

  //init search bar and display results
  return (
    <div className="search-books">
      <div className="search-books-bar" >
        <Link to="/" className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          <input 
            type="text" 
            placeholder="Search by title, author, or ISBN" 
            value={query} 
            onChange={(event) => {
              setQuery(event.target.value);
              searchbooks(event.target.value);
            }} 
          />
        </div>
      </div>
      <BookShelf books={results} addbook={addbooktoShelf} />
    </div>
  );

};

export default PageSearch;
