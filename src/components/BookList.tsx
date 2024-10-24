import React from "react";
import { Book } from "../data";

interface BookListProps {
  books: Book[];
  selectedBook: Book;
  onBookSelect: (book: Book) => void;
}

const BookList: React.FC<BookListProps> = ({ books, selectedBook, onBookSelect }) => {
  return (
    <div className="book-list">
      <h2>Select a Book</h2>
      <ul>
        {books.map((book) => (
          <li
            key={book.id}
            onClick={() => onBookSelect(book)}
            className={`book-item ${selectedBook.id === book.id ? 'selected' : ''}`}
          >
            <img src={book.coverImg} alt={book.name} className="book-cover" />
            <span>{book.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
