import React, { useState } from "react";
import "./AuthorList.css"

function AuthorList() {
  const [authors, setAuthors] = useState([]);
  const [newAuthor, setNewAuthor] = useState({
    name: "",
    birthDate: "",
    biography: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddAuthor = () => {
    if (newAuthor.name && newAuthor.birthDate) {
      setAuthors([...authors, newAuthor]);
      setNewAuthor({
        name: "",
        birthDate: "",
        biography: "",
      });
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setIsEditing(true);
    setNewAuthor(authors[index]);
  };

  const handleSave = (index) => {
    // Update the author at the given index in the authors array
    setAuthors((prevAuthors) => {
      const updatedAuthors = [...prevAuthors];
      updatedAuthors[index] = newAuthor;
      return updatedAuthors;
    });

    setIsEditing(false);
    setEditIndex(null);
    setNewAuthor({
      name: "",
      birthDate: "",
      biography: "",
    });
  };

  const handleDelete = (index) => {
    // Remove the author at the given index from the authors array
    setAuthors((prevAuthors) => {
      const updatedAuthors = [...prevAuthors];
      updatedAuthors.splice(index, 1);
      return updatedAuthors;
    });
  };

  return (
    <div>
      <h2>Manage Authors</h2>
      <div>
        <input
          type="text"
          placeholder="Author Name"
          value={newAuthor.name}
          onChange={(e) => setNewAuthor({ ...newAuthor, name: e.target.value })}
        />
        <input
          type="date"
          placeholder="Birth Date"
          value={newAuthor.birthDate}
          onChange={(e) =>
            setNewAuthor({ ...newAuthor, birthDate: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Biography"
          value={newAuthor.biography}
          onChange={(e) =>
            setNewAuthor({ ...newAuthor, biography: e.target.value })
          }
        />
        <button onClick={isEditing ? () => handleSave(editIndex) : handleAddAuthor}>
          {isEditing ? "Save" : "Add Author"}
        </button>
      </div>
      <ul>
        {authors.map((author, index) => (
          <li key={index}>
            <span>{author.name}</span>
            <span>{author.birthDate}</span>
            <span>{author.biography}</span>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AuthorList;
