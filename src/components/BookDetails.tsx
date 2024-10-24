import React from "react";
import { Book } from "../data";

interface BookDetailsProps {
  book: Book;
}

const BookDetails: React.FC<BookDetailsProps> = ({ book }) => {
  return (
    <div className="book-details">
      <img src={book.coverImg} alt={book.name} className="book-cover-large" />
      <div className="book-info">
        <h2>{book.name}</h2>
        <p>Author: {book.author}{book.coAuthor && `, ${book.coAuthor}`}</p>
        {book.sequels && book.sequels.length > 0 && (
          <ol>
            <h4>Sequels:</h4>
            {book.sequels.map((sequel, index) => (
              <li key={index}>{sequel}</li>
            ))}
          </ol>
        )}
        <p>
          Rating: {"⭐️".repeat(book.rating)}
        </p>
      </div>
    </div>
  );
};

export default BookDetails;
