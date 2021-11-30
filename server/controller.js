let likedRecipes = []




module.exports ={
    addUser: async (req, res) => {
        const db = req.app.get("db");
        const {email, password} = req.body
      
        db.new_user([email, password])
        res.status(200).send("Congrats, it worked")
        
      },
    getId: async (req, res) => {
      const db = req.app.get("db")
      const {email} = req.body
      console.log(email)
      const [userId] = await db.get_id([email])
      res.status(200).send(userId)
    },
    
    getAllRecipes: async (req, res) => {
        const db = req.app.get("db");
        const allRecipes = await db.get_recipes();
        
        res.status(200).send(allRecipes);
      },

    addLikedRecipe: (req, res) => {
    const db = req.app.get("db");
    let {user_id, recipe_id, liked} = req.body
    db.add_recipe([user_id, recipe_id, liked])
  
    
    res.sendStatus(200)
    
    },

    seeLikedRecipe: async (req, res) => {
        const db = req.app.get("db");
        const { email } = req.body;
        const [userId] = await db.get_id([email])
        
        const allLikedRecipes = await db.liked_recipes([userId.id])
        
        let recipes = []


        for (let i = 0; i <allLikedRecipes.length; i++){
            let [ recipe ] = await db.get_recipe_name(allLikedRecipes[i].recipe_id)
            recipes.push(recipe)

        }

    
        res.status(200).send(recipes)
    },

    deleteLikedRecipe:  async (req, res) => {
        const db = req.app.get("db");
        const { user_id, recipe_id } = req.body;
        console.log(req)


        const notWanted = await db.delete_liked([user_id, recipe_id])

    
       res.send(notWanted).status(200) 
        // we will need to call getAllRecipes again in the front end after this one is fired off :) 

      },
    
    postNewRecipe: async (req, res) => {
      const db = req.app.get("db");
      const { name, author, ingredients, instructions, image, user_id } = req.body

      await db.new_recipe([name, author, ingredients, instructions, image, user_id])

      res.status(200).send('recipe sent')

      // const newRecipe = db.new_recipe([])
      
        
        

      },


}


  