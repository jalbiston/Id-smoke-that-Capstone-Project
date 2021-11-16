import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom"

export default function Tinder() {
  return (
    <>
      
      <div className="tindy">
        <h1>Would You Smoke This?</h1>

        <div className="justinsbeaver">
          <button className="tinderyes"
          // push recipe into like recipes
          
          >Yes</button>

          <div className="recipebox"
          // axios.get recipes from database, shows random recipe
          
          ></div>

          <button className="tinderno"
          // simply just moves on to the next recipe and does not put it in the users liked recipes
          // once either of these buttons are pressed, a new recipe from the data base will be displayed
          
          >No</button>

          
        </div>
      </div>
      
      <Link to="/" className="back">Back to Dashboard</Link>
      
      
    </>
  );
}
