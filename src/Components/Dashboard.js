import React, { useState, useEffect } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "../App.css";
import Navbar from "./Navbar";
import axios from "axios"


export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [recipeName, setRecipeName] = useState('')
  const [author, setAuthor] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [recipeInput, setRecipeInput] = useState('')
  const [userId, setUserId] = useState(0)
  const [array, setArray] = useState([])
  const [recipeId, setRecipeId] = useState(0)

  function reset () {
    setRecipeName('')
    setAuthor('')
    setIngredients('')
    setRecipeInput('')
  }
  
function getLikedRecipes() {
  axios.post("/api/likedrecipes", {email:currentUser.email
  }).then((res) => {
    setArray(res.data)
  }).catch(err => console.log(err))
}
  function getUserId() {
    axios
      .post("/api/getId", {
        email: currentUser.email,
      })
      .then((res) => {
        setUserId(res.data.id);
      });
  }
  useEffect(() => {
    getLikedRecipes()
    getUserId()
    
  },[])


function handleForm (){
  
  console.log("we are in handleform")
  console.log(recipeName, author, ingredients, recipeInput)
  axios.post("/api/addrecipe", {
    
    name: recipeName,
    author: author,
    ingredients: ingredients,
    instructions: recipeInput,
    image: '',
    user_id: userId
} ).then ((res) => {
  console.log(res)
}).catch(err => console.log(err))
reset()
alert("Recipe Submitted")
}

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
function deleteIt (id) {
  console.log(recipeId)
  axios.delete("/api/likedrecipes", {data:{user_id: userId, recipe_id: id}})
  .then((res) => {
    window.location.reload()
    console.log(res)
  }).catch(err => console.log(err))
}



console.log(array, "dashboard")

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
        <div className ="liked-container2">
          {array.map((obj) => (
                 <div key ={obj.id}>
                 <h1 className="brunoDick"> {obj.name}</h1>
                 <h3 className="justinChinch">{obj.ingredients}</h3>
                 <p>{obj.instructions}</p>
                 <button className="deleteBtn"  onClick={() => {
                   setRecipeId(obj.id)
                   deleteIt(obj.id)
                 }}
                 
                 >Delete Liked</button>
             </div>
            ))}
        </div>
        
      </div>
      <Link to = "/Tinder" className="smokebtn"
        
        
        >Would you smoke that?</Link>
        
      <div className="form-container">
      <div className="submitRecipe form" 
      
      // would I do onSubmit={handleForm} ???

      >
      <h1>Would others smoke your recipe?  Submit it!</h1>
        <label for="recipeName">Recipe Name:</label>
        <input id="name" name="recipeName" value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)}
             
        />
        <label for="authorName">Your Name:</label>
        <input id="author" name="authorName" value={author}
        onChange={(e) => setAuthor(e.target.value)}
        
        
        />
        <label for="ingredients">Ingredients Needed: </label>
        <input id="ingredients" name="ingredients" value ={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        
        />
        <label for="recipeInput">What is the recipe, without your life story!</label>
        <textarea id="recipe" name="recipeInput" rows="30" cols="50" value={recipeInput}
        onChange={(e) => setRecipeInput(e.target.value)}
        
        
        ></textarea>
        <button onClick={handleForm} id="submitRecipe" value="submit">
          Submit.  Would they smoke it?
        </button>
      </div>
      </div>
      </div>
    </>
  );
}
