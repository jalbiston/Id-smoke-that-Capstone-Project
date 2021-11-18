require("dotenv").config();

const massive = require("massive");
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const path = require("path");

const { CONNECTION_STRING, PORT } = process.env;
const app = express();
app.use(express.json());
// app.use(cors());



// creating a firebase auth route to the users row
app.post("/api/register", async (req, res) => {
  const db = req.app.get("db");
  const {email, password} = req.body

  db.new_user([email, password])
  res.status(200).send("Congrats, it worked")
  
});
// ? Firebase may be already handling this vvvvvvv
// app.post("/api/login", async (req, res) => {

// })

// creating Tinder component routes
app.get("/api/getrecipes", async (req, res) => {
  const db = req.app.get("db");
  const allRecipes = await db.get_recipes();

  res.status(200).send(allRecipes);
});
app.post("/api/getrecipes", async (req, res) => {
  // add a row to the liked recipes table
  
  

});

// creating Dashboard Route component
app.get("/api/likedrecipes", async (req, res) => {
  // This will allow user to get their like recipes from the roulette
});
app.delete("/api/likedrecipes", async (req, res) => {
  // This will allow user to delete previously liked recipes from the list
});
app.post("/api/addrecipe", async (req, res) => {
  // form that allows user to post own recipe to database
});
/*
.map((obj.name) => {
  <p>{obj.name}</p>
})
*/

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
})
  .then((dbInstance) => {
    app.set("db", dbInstance);
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => console.log(`Grillin a Brisket on port: ${PORT}`));
