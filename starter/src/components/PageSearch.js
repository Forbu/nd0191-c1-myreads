// stateful component
import { useState } from "react";
import BookShelf from "./BookShelf";
import SearchBar from "./SearchBar";
import * as BooksAPI from "../BooksAPI";    

const PageSearch = ({books, addbooktoShelf}) => {

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
      const result_query = await BooksAPI.search(query, 10);
      
      // error handling
      if (result_query.error) {
        setResults([]);
        return;
      }

      // update the shelf of the books
      const updatedBooks = result_query.map((book) => {
        const bookDetails = books.find((b) => b.id === book.id);
        return { ...book, shelf: bookDetails ? bookDetails.shelf : "none" };
      });

      setResults(updatedBooks);

    } catch (error) {
      console.error("Error searching books:", error);
      setResults([]);
    }
  };

  //init search bar and display results
  return (
    <div className="search-books">
      <SearchBar query={query} setQuery={setQuery} searchbooks={searchbooks} />
      <BookShelf books={results} addbook={addbooktoShelf} />
    </div>
  );

};

export default PageSearch;
