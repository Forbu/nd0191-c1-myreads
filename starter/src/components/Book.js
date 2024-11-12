const Book = (props) => {
    const { book } = props;
    
    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                        book.imageLinks?.smallThumbnail ? 
                        `url(${book.imageLinks.smallThumbnail})` :
                            'none',
                    }}
                ></div>
                <div className="book-shelf-changer">
                <select 
                    value={book.shelf || 'none'} 
                    onChange={(event) => props.addbook(book, event.target.value)}>
                    <option value="move" disabled>
                        Move to...  
                    </option>
                    <option value="currentlyReading" disabled={book.shelf === 'currentlyReading'}>
                            Currently Reading
                        </option>
                    <option value="wantToRead" disabled={book.shelf === 'wantToRead'}>
                        Want to Read
                    </option>
                    <option value="read" disabled={book.shelf === 'read'}>
                        Read
                    </option>
                    <option value="none" disabled={book.shelf === 'none'}>
                        None
                        </option>
                </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            {book.authors && <div className="book-authors">{book.authors}</div>}
        </div>
    );
};

export default Book;
