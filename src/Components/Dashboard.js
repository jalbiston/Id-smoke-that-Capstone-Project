import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "../App.css";
import Navbar from "./Navbar";


export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

// function handleForm (){
//   e.preventDefault()
//   axios.post("/api/addrecipe", {
    
//     name: 
//     author: 
//     ingredients: 
//     instructions: 
//     image: 
//     user_id: 
// } ).then ((res) => {
//   console.log(res)
// }).catch(err => console.log(err))
// }

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }
//   console.log(currentUser);

console.log(document.getElementById("authorName"))
  return (
    <>
      <Navbar />

      <div className="profile-container">
        <Card className="card">
          <Card.Body className="card-body">
            <h2 className="text-center mb-4">Profile</h2>
            {error && <Alert variant="danger"> {error}</Alert>}
            <strong>Email: </strong> {currentUser.email}
            <Link
              to="/update-profile"
              className="btn btn-primary w-100
                    mt-3"
            >
              Update Profile
            </Link>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          <Button variant="link" onClick={handleLogout}>
            Log Out
          </Button>
        </div>
      </div>
      <div className="allTogether">
      <div className="liked-container">
        <div className="liked"> Liked Recipes:</div>
        <div className ="liked-container2"></div>
        <Link to = "/Tinder" className="smokebtn"
        
        
        >Would you smoke that?</Link>
      </div>
      <div className="form">
      <form className="submitRecipe">
      <h1>Would others smoke your recipe?  Submit it!</h1>
        <label for="recipeName">Recipe Name:</label>
        <input id="name" name="recipeName"
        
             
        />
        <label for="authorName">Your Name:</label>
        <input id="author" name="authorName"/>
        <label for="ingredients">Ingredients Needed: </label>
        <input id="ingredients" name="ingredients"/>
        <label for="recipeInput">What is the recipe, without your life story!</label>
        <textarea id="recipe" name="recipeInput" rows="30" cols="50"></textarea>
        <button type="submit" id="submitRecipe" value="submit">
          Submit.  Would they smoke it?
        </button>
      </form>
      </div>
      </div>
    </>
  );
}
