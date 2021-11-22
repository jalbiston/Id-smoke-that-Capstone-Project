UPDATE liked_recipes  
set liked = false
WHERE liked = true and user_id = $1 and recipe_id = $2
