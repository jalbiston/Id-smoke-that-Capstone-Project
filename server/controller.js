let likedRecipes = []




module.exports ={
    addUser: async (req, res) => {
        const db = req.app.get("db");
        const {email, password} = req.body
      
        db.new_user([email, password])
        res.status(200).send("Congrats, it worked")
        
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
  
    },

    deleteLikedRecipe:  async (req, res) => {
        // This will allow user to delete previously liked recipes from the list
      },
    
    postNewRecipe: async (req, res) => {
        // form that allows user to post own recipe to database
      },


}


  