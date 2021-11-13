require('dotenv').config()
const { CONNECTION_STRING, PORT} = process.env
const massive = require('massive')
const express = require('express')



const app = express()
app.use(express.json())

// creating routes
app.get('/api/getrecipes', async (req, res) => { 
   const db = req.app.get("db") 
   const allRecipes = await db.get_recipes()
   
   res.status(200).send(allRecipes)
})

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
     rejectUnauthorized: false,
    },
   }).then((dbInstance) => {
    app.set('db', dbInstance)
    console.log('db connected')
   })


app.listen(PORT, ()=> console.log(`Grillin a Brisket on port: ${PORT}`))
