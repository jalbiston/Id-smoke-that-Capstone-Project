import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom"


export default function Tinder() {
  return (
    <>
      <Navbar />
      <div className="tindy">
        <h1>Would You Smoke This?</h1>

        <div className="justinsbeaver">
          <button className="tinderyes"
          // push recipe into like recipes
          
          >I'd Smoke That</button>

          <div className="recipebox"
          // axios.get recipes from database, shows random recipe
          
        //   axios.get('/api/getrecipes')
        // .then((res)=> setRess(res.data))
        // .catch((err) => {console.log(err)})
          
          ></div>

          <button className="tinderno"
          // simply just moves on to the next recipe and does not put it in the users liked recipes
          // once either of these buttons are pressed, a new recipe from the data base will be displayed
          
          >Ah hell nah</button>

          
        </div>
      </div>
      
      <Link to="/" className="back">Back to Dashboard</Link>
      
      
    </>
  );
}
