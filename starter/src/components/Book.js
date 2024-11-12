const Book = (props) => {

    return <div className="book">
    <div className="book-top">
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 193,
          backgroundImage:
            `url(${props.book.imageLinks.smallThumbnail})`,
        }}
      ></div>
      <div className="book-shelf-changer">
        <select 
        value={props.book.shelf || 'none'} 
        onChange={(event) => props.addbook(props.book, event.target.value)}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading" disabled={props.book.shelf === 'currentlyReading'}>
            Currently Reading
          </option>
          <option value="wantToRead" disabled={props.book.shelf === 'wantToRead'}>
            Want to Read
          </option>
          <option value="read" disabled={props.book.shelf === 'read'}>
            Read
          </option>
          <option value="none" disabled={props.book.shelf === 'none'}>
            None
          </option>
        </select>
      </div>
    </div>
    <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.authors}</div>
    </div>;
};

export default Book;
