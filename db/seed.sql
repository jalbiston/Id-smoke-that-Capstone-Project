DROP TABLE recipes, users, liked_recipes;

 CREATE TABLE "users" (
	"id"  serial primary key,
	"email" TEXT UNIQUE,
	"password" TEXT
	
);



CREATE TABLE "recipes" (
	"id"  serial primary key,
	"name" TEXT,
	"author" TEXT,
	"ingredients" TEXT,
	"instructions" TEXT,
	"image" TEXT,
	"user_id" int
	
);



CREATE TABLE "liked_recipes" (
	"id"  serial primary key,
	"user_id" int,
	"recipe_id" int,
	"liked" BOOLEAN

);




ALTER TABLE "recipes"  ADD FOREIGN KEY ("user_id") REFERENCES "users"("id");

ALTER TABLE "liked_recipes" ADD FOREIGN KEY ("user_id") REFERENCES "users"("id");
ALTER TABLE "liked_recipes" ADD FOREIGN KEY ("recipe_id") REFERENCES "recipes"("id");
-- alter table goes here 
INSERT INTO users (email,password)
VALUES
  ('luctus.et.ultrices@outlook.ca','Valentine Mann'),
  ('et.rutrum.non@outlook.net','Michelle Robertson'),
  ('adipiscing.mauris@icloud.org','Eleanor Gibbs'),
  ('nullam.lobortis@google.org','Darryl Curry'),
  ('pharetra.sed@google.edu','Jaden Velazquez');

  INSERT INTO recipes (name,author,ingredients,instructions,image,user_id)
VALUES
  ('Brisket','Jesse Ballard','12 pound brisket, salt and pepper','Trim Brisket. Sprinkle with Salt and Pepper all over brisket. Cook at 225. Spray with beef stock every 40 minutes. wrap when Internal temperature is 140, cook until IT is 165','dapibus id, blandit at, nisi. Cum sociis natoque penatibus et',2),
  ('Pulled Pork','Coby Norris','10 pound bone in pork butt, pork seasoning, apple juice','season with desired pork seasoning. cook at 225 until IT is 205, wrap when IT is 160. Spray with apple juice every 30 minutes after two hours of initial cook time ','leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor',2),
  ('Pearls Smoked Burgers','Pearl Gill','1 i/b ground beef, seasoning','Season Burgers to taste.  Set smoker to 225. Smoke Burgers for one to two hours, depending on smoke flavor desire. Then Sear burgers on seperate grill, or turn smoker up to 500 degrees and sear each side for 2 minutes','mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a,',1),
  ('Sexy Smoked Meatballs','Jessamine Pratt','1 i/b of ground beef, Meat Church Honey Hog seasoning, Shredded Mozarella, Hoagie Buns','Roll ground beef into balls.  Apply Honey Hog seasoning.  Smoke balls for one hour at 225, or longer depending on desired smoke flavor. Take balsl off, sear in frying pan with marinara Sauce.  Sprinkle with Mozzarella cheese on a bun.  Enjoy!','et magnis dis parturient montes, nascetur ridiculus mus. Proin vel',3),
  ('Smokey Pumpkin Seeds','Beau Marks','Pumpkin Seeds, Soy Sauce','Season Seeds in the Soy Sauce. Smoke on the smoker at 180 for 3 hours.','cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam',1);


INSERT INTO liked_recipes (user_id,recipe_id,liked)
VALUES
  (2,5,'true'),
  (2,1,'true'),
  (3,5,'false'),
  (1,3,'false'),
  (3,3,'true');