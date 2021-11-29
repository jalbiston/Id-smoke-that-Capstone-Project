import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import DisplayBox from "./DisplayBox";
import { useAuth } from "../contexts/AuthContext";

export default function Tinder(props) {
  // const [example, setExample] = useState("example")
  const [recipeId, setRecipeId] = useState(1);
  const [recipes, setRecipes] = useState([]);
  const [userId, setUserId] = useState(0);
  let [counter, setCounter] = useState(1);
  const { currentUser } = useAuth();

  function getUserId() {
    axios
      .post("/api/getId", {
        email: currentUser.email,
      })
      .then((res) => {
        setUserId(res.data.id);
      });
  }
  function recipeTime() {
    axios.get("/api/getrecipes").then((res) => {
      setRecipes(res.data);
    });
  }
  useEffect(() => {
    recipeTime();
    getUserId();
  }, []);

  function handleRecipePush() {
    axios
      .post("/api/getrecipes", {
        user_id: userId,
        recipe_id: recipeId,
        liked: true,
      })
      .then(() => {
         alert("Recipe Added to your Liked Recipes!")
         setCounter(counter +1)
        
      });
  }

  console.log(recipeId, "recipeId");
  console.log(userId, "userId");
  console.log(recipes, "recipes");
  console.log(currentUser.email);
  return (
    <>
      <Navbar />
      <div className="tindy">
        <h1>Would You Smoke This?</h1>

        <div className="justinsbeaver">
          <button className="tinderyes" onClick={() => handleRecipePush()}>
            I'd Smoke That
          </button>

          <div className="recipebox">
            <DisplayBox
              recipes={recipes}
              setRecipeId={setRecipeId}
              counter={counter}
            />
          </div>

          <button className="tinderno" onClick={() => setCounter(counter + 1)}>
            Nah Ill Pass
          </button>
        </div>
      </div>

      <Link to="/" className="back">
        Back to Dashboard
      </Link>
    </>
  );
}
