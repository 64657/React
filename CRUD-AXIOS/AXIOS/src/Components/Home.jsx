import React from "react";
import { useUserContext } from "./context/usercontext"; // Importing the user context
import "./Home.css";

function Home() {
  // Destructuring values and functions from the user context
  const { name, setName, email, setEmail, phone, setPhone, handleFormSubmit } =
    useUserContext();
  const formId = 11; // A unique form ID (not clear how it's used)
  
  return (
    // Container div with class "bg"
    <div className="bg">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className="mt-5" style={{ color: "red" }}>
              ENTER USER:
            </h2>
            <form
              className="mt-3"
              onSubmit={(e) => handleFormSubmit(e, { name, email, phone }, formId)}
            >
              {/* Input field for user's name */}
              <div className="mb-3" >
                <input
                  type="text"
                  className="form-control"
                  id="nameInput"
                  placeholder="Enter the Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              
              {/* Input field for user's email */}
              <div className="mb-3" >
                <input
                  type="email"
                  className="form-control"
                  id="emailInput"
                  placeholder="name@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              {/* Input field for user's phone number */}
              <div className="mb-3" >
                <input
                  type="number"
                  className="form-control"
                  id="floatingNumber"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              
              {/* Submit button */}
              <button className="btn btn-primary" type="submit">
                ADD
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;