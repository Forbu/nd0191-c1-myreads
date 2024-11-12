// stateful component
import { useState } from "react";
import BookShelf from "./BookShelf";
import SearchBar from "./SearchBar";
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
      <SearchBar query={query} setQuery={setQuery} searchbooks={searchbooks} />
      <BookShelf books={results} addbook={addbooktoShelf} />
    </div>
  );

};

export default PageSearch;
