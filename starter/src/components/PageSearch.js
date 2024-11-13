// stateful component
import { useState } from "react";
import BookShelf from "./BookShelf";
import SearchBar from "./SearchBar";
import * as BooksAPI from "../BooksAPI";    

const PageSearch = () => {

    // state variables
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

  const searchbooks = async (query) => {
    // no big search
    if (query === "") {
        setResults([]);
        return;
    }

    try {
      const books = await BooksAPI.search(query, 10);
      
      // error handling
      if (books.error) {
        setResults([]);
        return;
      }

      // Wait for all shelf updates to complete using Promise.all
      const updatedBooks = await Promise.all(
        books.map(async (book) => {
          const bookDetails = await BooksAPI.get(book.id);
          return { ...book, shelf: bookDetails.shelf };
        })
      );

      setResults(updatedBooks);
    } catch (error) {
      console.error("Error searching books:", error);
      setResults([]);
    }
  };

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
