import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Create a UserContext using createContext, with initial values and functions
const UserContext = createContext({
  data: [],                 // List of user data
  name: "",                 // User's name
  email: "",                // User's email
  phone: "",                // User's phone
  setData: () => {},        // Function to set user data
  setName: () => {},        // Function to set user name
  setEmail: () => {},       // Function to set user email
  setPhone: () => {},       // Function to set user phone
  AddtoTable: () => {},     // Function to add user data to the table
  handleFormSubmit: () => {},// Function to handle form submission
  handleUpdate: () => {},   // Function to update user data
  handleDelete: () => {},   // Function to delete user data
});

const API = "https://jsonplaceholder.typicode.com/users"; // Placeholder API URL

// Custom hook for accessing the UserContext
export const useUserContext = () => useContext(UserContext);

export function UserContextProvider({ children }) {
  // Initialize state variables for user data, name, email, and phone
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Function to add user data to the local data array
  const AddtoTable = (newData) => {
    setData((prevData) => [...prevData, newData]);
  };

  // Access the router's navigate function
  let navigate = useNavigate();

  // Function to handle form submission
  const handleFormSubmit = (e, userData) => {
    e.preventDefault();
    // Send a POST request to create a new user
    axios
      .post(API, userData)
      .then((response) => {
        console.log(response);
        // Add the new user to the local data array
        AddtoTable(response.data);
        // Navigate to a different route
        navigate("/ListPages");
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // Reset the input fields
    setName("");
    setEmail("");
    setPhone("");
  };

  // Function to handle updating user data
  const handleUpdate = (id, updatedData) => {
    axios
      .put(`${API}/${id}`, updatedData)
      .then((response) => {
        const updatedUser = response.data;
        // Update the local data array with the updated user data
        setData((prevData) =>
          prevData.map((user) => (user.id === id ? updatedUser : user))
        );
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  // Function to handle deleting user data
  const handleDelete = (id) => {
    axios
      .delete(`${API}/${id}`)
      .then(() => {
        // Remove the user from the local data array
        setData((prevData) => prevData.filter((user) => user.id !== id));
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  // Fetch initial user data from the API when the component mounts
  useEffect(() => {
    axios
      .get(API)
      .then((response) => {
        console.log(response);
        // Update the local data array with the fetched data
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  // Create an object with values and functions to provide through the context
  const value = {
    data,
    name,
    email,
    phone,
    setName,
    setData,
    AddtoTable,
    handleFormSubmit,
    setEmail,
    setPhone,
    handleUpdate,
    handleDelete,
  };

  // Provide the context's value to its children components
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}