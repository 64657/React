import React, { useState, useEffect } from "react";
import "./BookList.css";

function BookList() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    isbn: "",
    publicationDate: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    // Fetch book data from your API or database here and update the books state.
    // For this example, we'll use a placeholder array.
    const initialBooks = [
      { title: "Book 1", author: "Author 1", isbn: "123456", publicationDate: "2023-01-01" },
      { title: "Book 2", author: "Author 2", isbn: "789012", publicationDate: "2023-02-01" },
    ];
    setBooks(initialBooks);
  }, []);

  const handleAddBook = () => {
    if (newBook.title && newBook.author) {
      setBooks([...books, newBook]);
      setNewBook({
        title: "",
        author: "",
        isbn: "",
        publicationDate: "",
      });
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setIsEditing(true);
  };

  const handleSave = (index) => {
    // Update the book at the given index in the books array
    setBooks((prevBooks) => {
      const updatedBooks = [...prevBooks];
      updatedBooks[index] = newBook;
      return updatedBooks;
    });

    setIsEditing(false);
    setEditIndex(null);
  };

  const handleDelete = (index) => {
    // Remove the book at the given index from the books array
    setBooks((prevBooks) => {
      const updatedBooks = [...prevBooks];
      updatedBooks.splice(index, 1);
      return updatedBooks;
    });
  };

  return (
    <div>
      <h2>Manage Books</h2>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <input
          type="text"
          placeholder="ISBN"
          value={newBook.isbn}
          onChange={(e) => setNewBook({ ...newBook, isbn: e.target.value })}
        />
        <input
          type="date"
          placeholder="Publication Date"
          value={newBook.publicationDate}
          onChange={(e) => setNewBook({ ...newBook, publicationDate: e.target.value })}
        />
        <button onClick={isEditing ? () => handleSave(editIndex) : handleAddBook}>
          {isEditing ? "Save" : "Add Book"}
        </button>
      </div>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <span>{book.title}</span>
            <span>{book.author}</span>
            <span>{book.isbn}</span>
            <span>{book.publicationDate}</span>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
