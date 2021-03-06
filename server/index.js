require("dotenv").config();

const massive = require("massive");
const express = require("express");
const controller = require('./controller.js')

const { CONNECTION_STRING, PORT } = process.env;
const app = express();
app.use(express.json());


app.post("/api/register", controller.addUser);


// creating Tinder component routes
app.get("/api/getrecipes", controller.getAllRecipes);
app.post("/api/getrecipes", controller.addLikedRecipe)
app.post("/api/getId", controller.getId)
// creating Dashboard Route component
app.post("/api/likedrecipes", controller.seeLikedRecipe)
app.delete("/api/likedrecipes", controller.deleteLikedRecipe)
app.post("/api/addrecipe", controller.postNewRecipe)

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
