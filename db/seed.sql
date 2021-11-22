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
  ('Ivory Payne','Jesse Ballard','Nulla tincidunt, neque','id, mollis nec,','dapibus id, blandit at, nisi. Cum sociis natoque penatibus et',2),
  ('Nolan Steele','Coby Norris','magna. Praesent interdum ligula eu enim.','sit amet ultricies sem magna nec quam. Curabitur vel','leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor',2),
  ('Claudia Boyle','Pearl Gill','lorem ipsum sodales purus, in','varius ultrices, mauris ipsum porta elit, a feugiat tellus','mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a,',1),
  ('Valentine Roth','Jessamine Pratt','vel nisl. Quisque fringilla euismod enim. Etiam gravida','feugiat non,','et magnis dis parturient montes, nascetur ridiculus mus. Proin vel',3),
  ('Lyle Hughes','Beau Marks','adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus.','in, hendrerit consectetuer, cursus et, magna.','cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam',1);


INSERT INTO liked_recipes (user_id,recipe_id,liked)
VALUES
  (2,5,'true'),
  (2,1,'true'),
  (3,5,'false'),
  (1,3,'false'),
  (3,3,'true');