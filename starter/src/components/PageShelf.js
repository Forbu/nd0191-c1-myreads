import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";


const PageShelf = ({books, addbooktoShelf}) => {


  return  <div className="list-books">
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
