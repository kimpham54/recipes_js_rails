# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: "howe", name: "howe gelb", email: "howe@tea.com", password: "howe")
user2 = User.create(username: "kevin", name: "kevin brown", email: "kevin@crag.com", password: "kevin")
user3 = User.create(username: "jason", name: "john saeteroy", email: "jason@asmr.com", password: "jason")

# source1 = Source.create(source_name:"cookie and kate", url:"https://cookieandkate.com/")
# source2 = Source.create(source_name:"tasty", url:"https://tasty.co/")
# source3 = Source.create(source_name:"love and lemons", url:"https://www.loveandlemons.com/")

Recipe.create([
{ user_id: 1, 
	title:'Lemon Ricotta Pancakes', 
	instructions: 'In a large mixing bowl, whisk together ricotta cheese, egg yolk, milk, vanilla extract, and lemon zest. Whisk until smooth, then add flour and baking powder. Mix this until fully combined.
	In a separate mixing bowl, beat the egg whites on high speed with an electric mixer until very white and foamy, then gradually add sugar. Continue beating on high speed until hard peaks form.
	Gently fold ¼ of the egg whites into the lemon ricotta mixture. Gently fold in the remaining egg whites. Be careful not to deflate the eggs!
	Butter up a nonstick pan and pour in about ¼ cup (25g) worth of batter for each pancake.
	for 2-3 minutes on each side or until golden brown on the edges.
	In a pot or pan, cook blueberries, sugar, water, and lemon juice. Stir occasionally to prevent sticking and cook for about 8-10 minutes or until the compote reaches a thick consistency. (Compote will thicken once it cools, so to loosen it up just add a touch of hot water.)
	Serve hot compote over stack of pancakes and dust with powdered sugar.
	Enjoy!', 
	category: 'breakfast', 
	url: 'https://tasty.co/recipe/lemon-ricotta-pancakes' },

{ user_id: 1, 
	title:'One-Pot Vegan Swedish "Meatball" Pasta', 
	instructions: 'In a large bowl, combine the mushrooms, beans, onion, bread crumbs, parsley, garlic, dried rosemary, Worcestershire sauce, soy sauce, nutmeg, liquid smoke, salt, and pepper. Mix well with a fork, mashing the beans a bit to form a paste.
	Heat the canola oil in a large pot over medium-high heat. Roll the “meatball” mixture and into golf ball-sized balls. Place the balls in the pot and cook for 1 minute on each side until browned.
	Add the vegetable broth, coconut milk, Worcestershire sauce, salt, pepper, and flour, and gently stir until evenly combined.
	Bring the liquid to a boil, then add the pasta. Stir constantly until the pasta is cooked and the liquid has reduced to a sauce that coats the noodles and meatballs, 7-8 minutes.
	Garnish with parsley.
	Enjoy!', 
	category: 'pasta', 
	url: 'https://tasty.co/recipe/one-pot-vegan-swedish-meatball-pasta' },

{ user_id: 2, 
	title:'Homemade Vegetarian Chili', 
	instructions: 'In a large Dutch oven or heavy-bottomed pot over medium heat, warm the olive oil until shimmering. Add the chopped onion, bell pepper, carrot, celery and ¼ teaspoon of the salt. Stir to combine and cook, stirring occasionally, until the vegetables are tender and the onion is translucent, about 7 to 10 minutes.
	Add the garlic, chili powder, cumin, smoked paprika and oregano. Cook until fragrant while stirring constantly, about 1 minute.
	Add the diced tomatoes and their juices, the drained black beans and pinto beans, vegetable broth and bay leaf. Stir to combine and let the mixture come to a simmer. Continue cooking, stirring occasionally and reducing heat as necessary to maintain a gentle simmer, for 30 minutes. Remove the chili from the heat.
	For the best texture and flavor, transfer 1 ½ cups of the chili to a blender, making sure to get some of the liquid portion. Securely fasten the lid and blend until smooth (watch out for hot steam), then pour the blended mixture back into the pot. (Or, you can blend the chili briefly with an immersion blender, or mash the chili with a potato masher until it reaches a thicker, more chili-like consistency.)
	Add the chopped cilantro, stir to blend, and then mix in the vinegar, to taste. Add salt to taste, too—I added ¼ teaspoon more at this point. Divide the mixture into individual bowls and serve with garnishes of your choice. This chili will keep well in the refrigerator for about 4 days or you can freeze it for longer-term storage.', 
	category: 'vegetarian', 
	url: 'https://cookieandkate.com/vegetarian-chili-recipe/' },

{ user_id: 2, 
	title:'Red Pesto Pasta', 
	instructions: 'Cook anchovies, garlic, oil, and walnuts in a small saucepan over medium heat, stirring often, until walnuts are deeply golden and garlic is just beginning to turn golden, 4–5 minutes. Add tomato paste and cook, stirring often, until it turns a shade darker, about 2 minutes. Remove pan from heat and let cool 5 minutes.', 
	category: 'pasta', 
	url: 'https://www.bonappetit.com/recipe/red-pesto-pasta'},

{ user_id: 3, 
	title:'Tropical Mango Spring Rolls with Avocado-Cilantro Dipping Sauce', 
	instructions: 'Fill a shallow pan larger than your spring roll wrappers (a pie plate works great) with warm water. Fold a lint-free tea towel in half and place it next to the dish. Place your prepared spring roll fillings within reach.
	Place one rice paper in the water and let it rest for about twenty seconds. You’ll learn to go by feel here—wait until the sheet is pliable but not super floppy. Carefully lay it flat on the towel.
	Leaving about an inch of open rice paper around the edge, cover the lower third of the paper with about ½ cup chopped arugula. Top with four slices of mango down the length of the greens, followed by several slices of bell pepper and jalapeño, and finally, a sprinkle of green onions.
	Fold over one long side to enclose the filling, then fold over the short sides like you would a burrito, and lastly, roll it up, stretching the remaining long side around the the roll to seal it. Repeat with remaining ingredients.
	To make your avocado sauce, combine the avocado, lime juice, water, cilantro and salt in a small food processor or blender. Purée until smooth and transfer to a small serving bowl. If you won’t be serving the rolls immediately, press plastic wrap against the surface of the dip to prevent oxidation.
	Slice the rolls in half on the diagonal with a sharp chef’s knife or serve whole, with avocado dipping sauce on the side.', 
	category: 'vegetarian', 
	url: 'https://cookieandkate.com/tropical-mango-spring-rolls/'},

{ user_id: 3, 
	title:'Avocado Peach Salsa', 
	instructions: 'Toss all of the chopped ingredients together in a bowl. Squeeze the lime and a drizzle of vinegar over the top. Toss and add salt to taste.', 
	category: 'salad', 
	url: 'https://cookieandkate.com/avocado-peach-salsa-recipe/'},
])

