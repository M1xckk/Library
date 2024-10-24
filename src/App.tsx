import React, { useState } from "react";
import books, { Book } from "./data";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import "./App.css";

function App() {
  const [selectedBook, setSelectedBook] = useState<Book>(books[0]);

  const handleBookSelect = (book: Book) => {
    setSelectedBook(book);
  };

  return (
    <div className="app-wrapper">
      <header className="app-header">
        <h1>BCIT Library</h1>
      </header>
      <div className="app-container">
        <div className="book-details-section">
          <BookDetails book={selectedBook} />
        </div>
        <div className="book-list-section">
          <BookList
            books={books}
            selectedBook={selectedBook}
            onBookSelect={handleBookSelect}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
