select recipe_id from liked_recipes
WHERE user_id = $1 and liked = true