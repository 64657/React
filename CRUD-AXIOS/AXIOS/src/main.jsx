import React from 'react'; // Importing React library
import ReactDOM from 'react-dom/client'; // Importing ReactDOM for rendering React components
import './index.css'; // Importing custom CSS styles
import App from './App'; // Importing the main App component
import { BrowserRouter as Router } from "react-router-dom"; // Importing BrowserRouter for routing

const root = ReactDOM.createRoot(document.getElementById('root')); // Creating a root element for rendering React content

root.render(
  <Router>
    <App />
  </Router>
);