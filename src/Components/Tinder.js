import React, {useEffect, useState} from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom"
import axios from "axios";
import DisplayBox from "./DisplayBox";
import { useAuth } from "../contexts/AuthContext";



export default function Tinder(props) {
  // const [example, setExample] = useState("example")
  const [recipes, setRecipes] = useState([])
  const [userId, setUserId] = useState(0)
  let [counter, setCounter] = useState(1) 
  const { currentUser } = useAuth();

  function getUserId () {
    axios.get("/api/getid", {
      email: currentUser.email
    }).then((res) => {
      setUserId(res.data)
    })
  }
  function recipeTime () {
    axios.get("/api/getrecipes").then((res) =>{
      setRecipes(res.data)
    })
  }
  useEffect(() => {
    recipeTime()
    getUserId()
  }, [])
  function handleRecipePush () {
    
    axios.post("/api/getrecipes", {
      user_id: userId,
      recipe_id: {},
      liked: true
    }).then(() =>{
      recipes.splice()
    })
  }
  
  
  return (
    <>
      <Navbar />
      <div className="tindy">
        <h1>Would You Smoke This?</h1>

        <div className="justinsbeaver">
          <button className="tinderyes"
          onClick
          
          >I'd Smoke That</button>

          <div className="recipebox">
            <DisplayBox recipes={ recipes } counter = {counter}/>
          </div>

          <button className="tinderno"
          onClick={() => 
          setCounter(counter +1)
          
          }
          
          >Nah Ill Pass</button>

          
        </div>
      </div>
      
      <Link to="/" className="back">Back to Dashboard</Link>
      
      
    </>
  );
}
