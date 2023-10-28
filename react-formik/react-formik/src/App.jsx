import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import BookForm from "./components/BookForm";
import AuthorForm from "./components/AuthorForm";
import BookList from "./components/BookList";
import AuthorList from "./components/AuthorList";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Library Management System</h1>

        <nav>
          <ul>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/authors">Authors</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/books" element={<BookList />} />
          <Route path="/authors" element={<AuthorList />} />

          <Route path="/books/add" element={<BookForm />} />
          <Route path="/authors/add" element={<AuthorForm />} />
          <Route path="/authors/edit/:id" element={<AuthorForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
