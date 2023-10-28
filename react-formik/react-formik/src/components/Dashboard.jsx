import React from "react";
import { Link, Route } from "react-router-dom";
import BookList from "./BookList";
import AuthorList from "./AuthorList";

function Dashboard() {
  return (
    <div className="dashboard">
      <nav>
        <ul>
          <li>
            <Link to="/books">Manage Books</Link>
          </li>
          <li>
            <Link to="/authors">Manage Authors</Link>
          </li>
        </ul>
      </nav>

      <Route path="/books" component={BookList} />
      <Route path="/authors" component={AuthorList} />
    </div>
  );
}

export default Dashboard;
