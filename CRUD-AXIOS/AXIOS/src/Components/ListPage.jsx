import React, { useState } from "react";
import { useUserContext } from "./context/usercontext"; // Importing the user context
import axios from "axios"; // Importing axios for making HTTP requests

function ListPages() {
  // Destructuring values and functions from the user context
  const { data, handleDelete, handleUpdate } = useUserContext();
  
  // State variables for handling user editing
  const [editingUserId, setEditingUserId] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");
  const [updatedPhone, setUpdatedPhone] = useState("");

  // Function to handle the "Edit" button click
  const handleEditClick = (user) => {
    setEditingUserId(user.id);
    setUpdatedName(user.name);
    setUpdatedEmail(user.email);
    setUpdatedPhone(user.phone);
  };

  // Function to handle the "Update" button click
  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editingUserId) {
      // Call the handleUpdate function from the context to update user data
      handleUpdate(editingUserId, {
        name: updatedName,
        email: updatedEmail,
        phone: updatedPhone,
      });
      // Clear the editing state
      setEditingUserId(null);
    }
  };

  return (
    // Container div with styles for formatting
    <div className="container mt-5" style={{ backgroundColor: "green", color: "white", border: "2px solid white" }}>
      <table className="table table-bordered table-dark">
        <thead className="thead-dark">
          <tr>
            {/* Table header columns */}
            <th scope="col" style={{ backgroundColor: 'darkblue'}}>ID</th>
            <th scope="col" style={{ backgroundColor: 'darkblue'}}>NAME</th>
            <th scope="col" style={{ backgroundColor: 'darkblue'}}>EMAIL</th>
            <th scope="col" style={{ backgroundColor: 'darkblue'}}>PHONE</th>
            <th scope="col" style={{ backgroundColor: 'darkblue'}}>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                {/* Render input field if editing this user, otherwise display user's name */}
                {editingUserId === user.id ? (
                  <input
                    type="text"
                    className="form-control"
                    value={updatedName}
                    onChange={(e) => setUpdatedName(e.target.value)}
                  />
                ) : (
                  user.name
                )}
              </td>
              <td>
                {/* Render input field if editing this user, otherwise display user's email */}
                {editingUserId === user.id ? (
                  <input
                    type="email"
                    className="form-control"
                    value={updatedEmail}
                    onChange={(e) => setUpdatedEmail(e.target.value)}
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {/* Render input field if editing this user, otherwise display user's phone */}
                {editingUserId === user.id ? (
                  <input
                    type="text"
                    className="form-control"
                    value={updatedPhone}
                    onChange={(e) => setUpdatedPhone(e.target.value)}
                  />
                ) : (
                  user.phone
                )}
              </td>
              <td>
                {/* Render "Update" button if editing this user, otherwise display "Edit" and "Delete" buttons */}
                {editingUserId === user.id ? (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleEditSubmit}
                  >
                    Update
                  </button>
                ) : (
                  <>
                    <button
                      type="button"
                      className="btn btn-primary me-2"
                      onClick={() => handleEditClick(user)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListPages;