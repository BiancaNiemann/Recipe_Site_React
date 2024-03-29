export const meals = [
    {
        name: "Oma's Mac 'n Cheese",
        mealType: 'main',
        mealSearch: ['pasta', 'cheese', 'macaroni', 'mushrooms', 'sweetcorn', 'bacon', 'onions'],
        image: '/images/mac-n-cheese.jpg',
        alt: "Oma's Mac n Cheese",
        isVege: true,
        ingredients: ['500g Elbow Macaroni (this will easily serve six adults)',
            '1 x tin of canned button mushrooms',
            '1 x tin of creamy mushroom soup',
            '1 x tin of creamed sweetcorn',
            '1 x 250g streaky bacon, cut into small slices',
            '2 x onions (medium) chopped into a fine dice'
        ],
        instructions: [
            'Cook off the pasta in boiling and salted water until cooked to al dente and not too soft',
            'Strain in colander, toss a little oil into the pasta to keep the pieces separate',
            'Leave one side',
            'Whilst the mac noodles are cooking, start prep on the rest of the ingredients',
            'Sauté the onions, sweating them off until transparent',
            'Add in the bacon and render it down along with those onions, until soft but not crispy',
            '   (if you are using Tuna instead, add it in toward the end of sauce prep)',
            'Add in the sweetcorn, and the canned mushrooms (drained)',
            'Pour the mushroom soup into a bowl and then stir it up well before adding into the above mix. This prevents clumping',
            'Season with salt, pepper, a few pinches of cayenne pepper (optional) as well as some dried thyme.',
            'Tip the pasta into a baking dish or lasagne bowl, and then add the above mixture, stirring to incorporate evenly and taste test. Adjust seasoning if need be. Top with grated cheese and bake on centre rack of oven at 160 Deg C for twenty minutes to half an hour and remove from oven.',
            'Restrain yourself from tasting the delicous outcome whilst piping hot!',
            'Better to let it rest up on a board for a few minutes, to cool down and to set up properly.',
            'Perfect served with a green salad, but sublime on its own.',
            'This meal should take less than an hour to prep, and allows you to clean the kitchen and set the table whilst it is baking.'
        ],
        notes: [
            'I normally use Penne',
            'You can use the mushroom liquid for a stock or sauce, or add it to the cream and milk for the mac n cheese. Umami flavours are always great.',
            'Must admit, adding sliced green pepper along with the onions allows for a warm Italian flavour.'
        ],
        uuid: 1
    },
    {
        name: "Dinky's Snail shaped pasta with tomato and Lamb",
        mealType: 'main',
        mealSearch: ['pasta', 'mutton', 'lamb', 'tomato', 'stew', 'carrots'],
        isVege: false,
        image: '/images/snail-pasta.jpg',
        alt: "Snail Pasta",
        ingredients: [
            '1kg lamb/mutton neck or breast',
            'Olive oil',
            '2 carrots finely diced',
            '2 sticks celery finely diced',
            '1 or 2 onions diced',
            '3 cloves or so of garlic, chopped',
            'Salt and pepper',
            'Dried Thyme and some dried Rosemary',
            '1 small can of tomato paste',
            '1 can of tomato puree',
            '1 can of diced tomatoes ',
            'Some dark or white vinegar',
            '2 beef stock cubes dissolved in 750ml boiling water',
            '1 x 500g Snail shaped pasta'
        ],
        instructions: [
            'Heat the olive oil in a large pot over medium-high heat. Add in the meat and cook for 2 to 3 minutes per side, stirring, until all sides are lightly browned. Transfer the lamb to a plate and set aside',
            'Lower the heat to medium and add the carrot, celery, onion, chopped garlic, salt, pepper, thyme and rosemary. Allow to cook for 8-10 minutes until the vegetables have softened and the onions are translucent',
            'Add the tomatoes and stock. Cook for 5 minutes.',
            'Add in the lamb and stir to combine. Now set the stove top to lowest heat and let this mix braise away ever so slowly. Add liquid stock or water if it gets too dry.  Depending on the meat cut, this will take at least an hour, if not more. (This step could be done in a 175 Deg C oven, centre shelf, in a casserole dish, for 3 hours)',
            'Use a slotted spoon to remove all the meat once it is good and tender ',
            'Using a potato masher, mash the vegetables in the sauce so they break down into smaller pieces, thickening the sauce.',
            'Toward the end of the ragout cooking time, cook the pasta in salted water until al dente and then place in a colander over the cooking pot. Sprinkle with some olive oil and agitate to separate noodles. Set aside.',
            'Now it is time to finish off that comfort food dinner. Combine the ragout, meat and snail  shaped pasta in a large casserole and stir to combine',
            'The ragout sauce should be thick, but thin enough to coat the pasta beautifully.',
            'Warm in oven',
            'Serve in bowls, and be prepared to serve seconds (maybe thirds)'
        ],
        notes: [
            "Lumaconi and Lumache are the Italian names for the snail shaped noodles that fill with sauce making for sumptuous spoonful's of flavour",
            'I add red wine, ground coriander and cumin to mine',
            'Balsamic vinegar gives a better balance, but was not readily available back then',
            'Parmesan and Cilantro or Parsley to top the dish, also modern, but delicious',
            'Could use rigatoni, penne or other pasta shape that will hold the sauce'
        ],
        uuid: 2
    },
    {
        name: "80's Chicken Curry",
        mealType: "main",
        mealSearch: ['chicken', 'curry', 'rajah', 'garlic'],
        isVege: false,
        image: "/images/chicken-curry.jpg",
        alt: "Chicken curry & Naan bread ",
        ingredients: [
            '3 tbsp oil',
            '1 kg chicken pieces',
            '3 cloves garlic, minced',
            '1 medium onion, chopped',
            '1 Chicken stock cube',
            '3 tbsp Rajah Medium curry powder',
            '2 cups water',
            '1 carrot, sliced',
            '2 potatoes, chopped',
            '1 can of Green Peas',
            'salt and pepper to taste',
            'A tbsp or so of vinegar '
        ],
        instructions: [
            'Pour the oil into a medium-sized pot over medium heat. Sauté the garlic until browned. Add the onions. Sauté the chicken pieces and let brown on all sides.',
            'Sauté the garlic until browned. Add the onions. ',
            'Sauté the chicken pieces and let brown on all sides.',
            'Add the curry powder, vinegar and stock cube (dissolved in the water) as well as some salt and pepper. ',
            'Sauté for a few minutes, then simmer for 15 minutes Add the potatoes and the carrots. Simmer for 20 minutes covered. ',
            'Check and stir when needed. ',
            'Add the peas and then let it simmer again with the lid off until the sauce is thick.',
            'Season with more salt and pepper if needed.'
        ],
        notes: [
            'Simple to the max, but honestly, really good, and not too spicy, so even the kids enjoyed the curry'
        ],
        uuid: 3
    },
    {
        name: "80's Beef Stew",
        mealType: "main",
        mealSearch: ["beef", 'stew', 'tomato', 'potatoe'],
        isVege: false,
        image: "/images/beef-stew.jpg",
        alt: " ",
        ingredients: [
            'Cooking oil for frying (I used Sunflower oil back then)',
            '2 onions chopped',
            '1 green pepper chopped',
            'A few chopped tomatoes',
            '4 potatoes peeled and chopped',
            '3 carrots, chopped',
            'Salt and pepper',
            '30 ml medium Rajah curry powder, sometimes more, sometimes less.',
            'Some Robertsons barbecue spice and a good sprinkle of Clove powder',
            'Back then I never really added garlic or herbs, was not really something I thought of .',
            'Round about 1Kg of stewing beef, Chuck, or Blade',
            '1 Beef or Oxtail stock cube ( I have even used a chicken stock cube)'
        ],
        instructions: [
            'Heat the oil in a pot and fry the onion and green pepper until soft',
            'Add the Rajah Medium Curry Powder, spices and tomato and fry for about two minutes or so',
            'Add the beef and fry until well browned',
            'Add the stock cube dissolved in some of the water, as well as that glug of vinegar and bring it up to the boil, then let it simmer with lid on for a good half an hour. Check if it needs stirring every now and then.',
            'Add the potatoes and carrots, bring back up to the boil and then simmer with lid on for another half an hour. Check and stir occasionally.',
            'Add the soup, dissolved in the rest of the water, stir and allow it all to simmer for 15 minutes until it becomes thick. Lid on if already thick to start with (or add some more water). Lid off if very thin, so that it reduces down.'
        ],
        notes: [
            'This dinner really went down well, even though it did not have the finesse of a modern stew. No garlic, no parsley, just good old fashioned comfort food.',
            'If I made chicken stew, the process was much the same, just that cooking time on the chicken pieces was a little shorter. (Never thought of chicken fillets back then, just good old braai chicken pieces). Instead of only water, I did add milk as well, when adding in the Chicken or Tomato soup and sometimes added dried Thyme'
        ],
        uuid: 4
    },
    {
        name: "Breakfast Oat Bake",
        mealType: "breakfast",
        mealSearch: ['oats', 'bananas', 'apple'],
        isVege: true,
        image: "/images/oats.jpg",
        alt: "Bowls of oats",
        ingredients: [
            '2 cups Oats',
            '1 cup Milk',
            '2 eggs',
            '2 ripe bananas mashed',
            '1 apple grated'
        ],
        instructions: [
            'Mix all ingredients together',
            "bake at 180 deg for 30min"

        ],
        notes: [
            "I like to serve this with a bit of milk or plain yoghurt on top"
        ],
        uuid: 5
    },
    {
        name: "Dinky's Cottage Pie",
        mealType: "main",
        mealSearch: ['mince', 'potatoe', 'Cottage Pie', 'pumpkin', 'potatoe'],
        isVege: false,
        image: "/images/cottage-pie.JPG",
        alt: "Cottage Pie in dish",
        ingredients: [
            'Seasoning of choice (pepper, salt, Oregano, Thyme)',
            '500gr Fresh Mince',
            '1 Large Onion finely diced',
            'A few cloves fresh Garlic, crushed',
            '1 can Passata',
            'Beef stock liquid',
            'Balsamic vinegar',
            'Ketchup',
            'Mashed Pumpkin',
            'Mashed Potatoe',
            'Blob of Butter',
            'Grated nutmeg',
        ],
        instructions: [
            'Mom always used a good grade of beef mince, and never made Shepherds Pie using mutton mince.',
            'She used mash rather than sliced potatoes as a topping, which we all preferred',
            'When pumpkin was in season, Mom would add it in between the mince and the potato',
            'Back then beef mince was always good quality so one did not have to look for mince that did not look grey or have too much gristle in it. Nowadays, I pay the price and but better quality mince, as buying the cheap staff is not worth it.',
            'Always a good idea to braise and brown the mince first, adding a little at a time into your saucepan that has a little hot oil in it. That way the mince separates and browns, rather than boiling and not gaining colour. ',
            'Add your seasoning of choice, which can be as plain as salt and pepper to salt, pepper, dried Thyme, Oregano and Sage, as well as some cracked black pepper and any other spices that you may enjoy with mince. I add clove powder and Spanish Paprika powder.',
            'Time to add some chopped onions, with a finer dice being better than a chunky chop. Add some garlic (not something that was big back when we grew up) and stir in to combine mince and onion. Mom used to add a can of tomato puree and a small can of tomato paste, but I just add Passata, finding the Pomodoro favour to be greater. To that, once stirred add, some beef stock liquid, enough to get to a reasonably thin mixture once stirred in, and let the mix simmer away until it thickens up and the mince is cooked.',
            'At this time I balance flavours with Balsamic vinegar and good old Ketchup (in our house, that has to be All Gold), and check seasoning as well as add some more dried herbs.',
            'Into a casserole or Lasagne dish that meat goes, keeping back some of the liquid so as not to be to "watery"',
            'Top with prepared mash, or with mashed pumpkin and then mash.',
            'Dot the top with some butter, and a little grated Nutmeg, as well as some extra salt. Into oven, centre rack at 180 Deg C for 20 minutes or so.',
            'Serve alongside a green salad and enjoy.',
            'NB Potato hint - drain and dry the cooked potatoes in your oven for a few minutes, then add warmed Half and Half slowly while mashing. Do not use a whisk or blender or you will end up with a gluey mix. Add butter and stir in.  ',
            'Using warmed milk and cream mix stops the potato starch toughening, and adding butter last, rather than first, stops the butter splitting. (The things we learn from Cookery channel)'
        ],
        notes: [
            'Cottage Pie uses ground beef, whereas Shepherds Pie uses lamb.',
            'Cottage Pie came around in 1791, and it was considered a “poor mans dinner.”',
            "Shepherd’s Pie has always used mashed potatoes as a topping, whereas traditionally, Cottage Pie used sliced potatos."
        ],
        uuid: 6
    },
    {
        name: "Super simple minestrone soup",
        mealType: "soup",
        mealSearch: ['soup', 'beans', 'zuchinni', 'carrot', 'spinach', 'pasta'],
        isVege: true,
        image: "/images/minestrone-soup.jpg",
        alt: " ",
        ingredients: [
            '1 cup minced white onion (about 1 small onion)',
            '1/2 cup chopped zucchini/courgette',
            '1/2 cup frozen cut green beans',
            '1/4 cup minced celery ',
            '4 teaspoons minced garlic (about 4 cloves)',
            '4 cups vegetable broth/stock (Ina Paarmans is excellent)',
            '2 cans red kidney beans, drained',
            '2  cans small white beans or butter beans ',
            '1  can diced tomatoes',
            '1/2 cup carrot (julienned or shredded)',
            '2 tablespoons minced fresh parsley',
            '1 1/2 teaspoons dried oregano',
            '1 1/2 teaspoons salt',
            '1/2 teaspoon ground black pepper',
            '1/2 teaspoon dried basil',
            '1/4 teaspoon dried thyme',
            '3 cups hot water',
            '4 cups fresh Baby Spinach ( Or normal chard)',
            '1/2 cup small shell pasta',

        ],
        instructions: [
            'Heat three tablespoons of olive oil over medium heat in a large soup pot.',
            'Saute onion, celery, garlic, green beans, and zucchini in the oil for 5 minutes or until onions begin to turn translucent.',
            'Add vegetable broth to pot, plus drained tomatoes, beans, carrot, hot water, and spices.',
            'Bring soup to a boil, then reduce heat and allow to simmer for 20 minutes.',
            'Add spinach leaves and pasta and cook for an additional 20 minutes or until desired consistency.',
            'Makes about eight 1 1/2 cup servings.',
        ],
        notes: [
            'Could not be more simple!',
        ],
        uuid: 7
    },
    {
        name: "Sweet Potato & Butternut Soup",
        mealType: "soup",
        mealSearch: ['soup', 'beans', 'sweet potatoe', 'carrots', 'butternut'],
        isVege: true,
        image: "/images/butternut-soup.jpg",
        alt: " ",
        ingredients: [
            '2 large carrots, peeled and grated',
            '1 apple, peeled and grated (toss in some lemon water to stop it oxidising)',
            '2 or 3 cloves of garlic (I used bought crushed garlic). Leave out if you have neither',
            '2 medium size onions, finely chopped',
            '400g pumpkin or butternut flesh, diced into smallish cubes',
            '2 large sweet potatoes ',
        ],
        instructions: [
            'Saute the onion, garlic, carrots, apple and veg in some cooking oil, to get a touch of caramelization. Season with salt and pepper.',
            'Stir in either chicken or veg stock to more than cover the veg (you can use a stock cubedissolved in hot water)  ',
            'Simmer until done, adding a little nutmeg if you have',
            'I blitzed the soup for an even texture, but you can leave it as is.',
            'Balance with a little seasoning if needed.',
            'Remove from heat and stir in a blob of cold margarine or butter',
        ],
        notes: [
            'So simple, and very satisfying',
        ],
        uuid: 8
    },
    {
        name: "Uncle Roly's yummy Milk Tart(Old Style)",
        mealType: "dessert",
        mealSearch: ['pudding', 'milk', 'tart', 'sugar'],
        isVege: true,
        image: "/images/milk-tart.JPG",
        alt: "Picture of Milk Tart",
        ingredients: [
            '4 1/2 cups Milk',
            '3 Tbsp Butter',
            '3 Eggs',
            '3/4 cup Sugar',
            '3 Tbsp Cornflour (Maizena)',
            '3 Tbsp Cake Flour',
            '1 cup Butter',
            '2 cups all-purpose flour',
            '1/2 cup Sugar',
            'Cinnamon'
        ],
        instructions: [
            'Preheat the oven to 180 deg',
            'Mix together the butter, flour and sugar',
            'Press mixture into a tart pan',
            'Bake for about 12-15 minutes, till a light brown',
            'Remove from oven and allow to cool completely',
            'Boil together Milk and Butter',
            'Mix eggs, sugar, cornflour and flour',
            'Stir mixture into the milk and boil slowly for 10 minutes stirring continuously(NB)',
            'Fill the cooled base with the boiled mixture and sprinkle cinnamon over the top',
            'Allow to cool',
        ],
        notes: [
            'I use self-raising flour for this recipe',
            'Adding some cinnamon to the egg mixture gives it extra flavour',
            'This recipe should give you 2 average (23cm) milk tarts'
        ],
        uuid: 9
    },
    {
        name: "Netties Irish Coddle",
        mealType: "main",
        mealSearch: ['stew', 'pork', 'irish', 'sausage', 'bacon'],
        isVege: false,
        image: "/images/irish-coddle.JPG",
        alt: "Irish Coddle in pot",
        ingredients: [
            '1 large Onion',
            '1 packet Pork sausages',
            '1 packet streaky bacon',
            'Maizena or flour',
            'Butter',
            'Salt',
            'Pepper'
        ],
        instructions: [
            'Dice and fry the onions and bacon together till onion is clear in color',
            'Add sausages and sufficient water to cover them',
            'Leave to simmer till sausages are cooked and soft',
            'Mix maizena or flour into a paste in a small bowl, must be fairly runny but sufficient flour to thicken',
            'Pour paste into coddle and strill through and check for lumps',
            'Continue simmering on low heat till you are ready to eat'
        ],
        notes: [
            'Best served with mashed Potatoes and peas',
            'You can also add potatoes and corrots to the pot'
        ],
        uuid: 10
    },
    {
        name: "Healthy Muffins for Kids - savoury",
        mealType: "snackbread",
        mealSearch: ['muffins', 'healthy', 'kids', 'zucchini', 'cheese', 'muffin', 'health'],
        isVege: true,
        image: '/images/Health-kid-muffins.JPG',
        alt: 'Healthy kids muffins image',
        ingredients: [
            '2 1/2 cups flour',
            '1 tbsp sugar',
            '1 tsp baking powder',
            '1/4 tsp salt',
            '3/4 cup milk',
            '1/2 cup yogurt',
            '1/2 cup avo oil',
            '1 large egg',
            '1 grated zucchini',
            '1/2 cup gratted cheddar cheese'
        ],
        instructions: [
            'Pre-heat oven to 180 deg and get 12 muffin cups ready',
            'In a bowl, mix all the dry ingredients together',
            'In another bowl mix all wet ingredients together',
            'Fold the wet ingredients into the dry ones and use a wooden spoon to mix until just combined. Dont over mix.',
            'Divide batter into muffin cups',
            'Bake in oven for 20-22 mins, or until golden brown on top'
        ],
        notes: [
            'If by some crazy chance you have leftovers, you can store these in an airtight container, for up to 5 days in the fridge or 3 months in the freezer'
        ],
        uuid: 11
    },
    {
        name: "Healthy Muffins for Kids - sweet",
        mealType: "snackbread",
        mealSearch: ['muffins', 'healthy', 'kids', 'peanut', 'jam', 'muffin', 'peanuts'],
        isVege: true,
        image: '/images/Health-kid-muffins-sweet.JPG',
        alt: 'Healthy kids muffins image',
        ingredients: [
            '2 1/2 cups flour',
            '1/4 cup sugar',
            '1 tsp baking powder',
            '1/4 tsp salt',
            '3/4 cup milk',
            '1/2 cup yogurt',
            '1/2 cup avo oil',
            '1 large egg',
            '1/4 cup Peanut Butter',
            '1/4 cup stawberry jam'
        ],
        instructions: [
            'Pre-heat oven to 180 deg and get 12 muffin cups ready',
            'In a bowl, mix all the dry ingredients together',
            'In another bowl mix all wet ingredients together',
            'Fold the wet ingredients into the dry ones and use a wooden spoon to mix until just combined. Dont over mix.',
            'Divide batter into muffin cups',
            'Bake in oven for 20-22 mins, or until golden brown on top'
        ],
        notes: [
            'If by some crazy chance you have leftovers, you can store these in an airtight container, for up to 5 days in the fridge or 3 months in the freezer'
        ],
        uuid: 12
    },
    {
        name: "Simple Pasta Salad",
        mealType: "salad",
        mealSearch: ['pasta', 'salad', 'zucchini', 'tomatoes'],
        isVege: true,
        image: "/images/simple-pasta-salad.JPG",
        alt: "Simple pasta salad image",
        ingredients: [
            '1 pound dried pasta like fusilli, penne, rotini or farfalle (bow tie)',
            '1 cup sliced bell pepper (1 medium)',
            '1 cup thinly sliced zucchini (1/2 medium)',
            '1 cup halved cherry tomatoes',
            '1/3 cup thinly sliced scallions (5 to 6)',
            '1/4 cup sliced pepperoncini or banana peppers, optional',
            '1 cup (4 ounces) halved mixed olives',
            '1 cup (2 ounces) grated parmesan cheese or hard cheese',
            '1/3 cup red wine vinegar, white wine vinegar',
            '1/2 teaspoon fine sea salt, plus more to taste',
            '1/2 teaspoon fresh ground black pepper',
            '1/2 teaspoon dried oregano',
            '2 to 3 tablespoons juice from pepperoncini jar, optional',
            '1/2 cup extra-virgin olive oil',
        ],
        instructions: [
            'Bring a large pot of salted water to a boil. Add pasta and cook until tender, 6 to 10 minutes (check the package for recommended cook time). Drain and rinse well under cold water.',
            'While the pasta cooks, in the bottom of a large bowl, make the dressing. Whisk the red wine vinegar, salt, pepper, oregano, pepperoncini juice (if using), and the olive oil until blended. Add the drained and rinsed pasta to the dressing and mix well.',
            'Stir in the bell pepper, zucchini, tomatoes, scallions, pepperoncini (if using), olives, parmesan, mozzarella, and the herbs (if using). Taste for seasoning and adjust with salt and pepper as needed. Serve or for the best results, cover and refrigerate at least 30 minutes and up to 5 days',
        ],
        notes: [
        ],
        uuid: 13
    },
    {
        name: "Joghurt Brötchen (Yoghurt Rolls)",
        mealType: "snackbread",
        mealSearch: ['rolls', 'bread', 'yoghurt', 'raisins', 'breadroll', 'breadrolls'],
        isVege: true,
        image: "",
        alt: "Raisin rolls",
        ingredients: [
            '275g Flour',
            '1 pkt / 15ml backing powder',
            '250 plain joghurt',
            '4 tbs Milk',
            '4 tbs Oil',
            '2 tbs Raisins',
            '1 Apple'
        ],
        instructions: [
            'Heat oven to 180 deg',
            'Mix together yoghurt, oil and milk',
            'Add flour and baking powder and knead',
            'Add chopped apple and raisins',
            'Using your hands roll 12 small breadrolls and lay on a tray with baking paper',
            'Bake for about 20 minutes and check if ready'
        ],
        notes: [
        ],
        uuid: 14
    },
    {
        name: "Easy-lemon-sheet-cake",
        mealType: "dessert",
        mealSearch: ["tarts", "milk", "pastry", 'lemon'],
        isVege: true,
        image: "/images/lemon-cake.JPG",
        alt: "Lemon cake slice",
        ingredients: [
            "1 cup unsalted butter, room temperature",
            "1 cup granulated sugar",
            "4 large eggs",
            "2 lemons, zest and juice",
            "1 tsp vanilla extract",
            "2 cups all-purpose flour",
            "2 tsp baking powder",
            "1/4 tsp salt",
            "1 1/2 cup icing sugar"
        ],
        instructions: [
            "Preheat the oven to 180°C. Spray a 9x13 inch baking pan with non-stick spray or grease with butter and line with a sheet of baking paper.",
            "In the bowl of a stand mixer fitted with the paddle attachment, combine room temperature butter and sugar. Beat at medium speed until light and fluffy, about 2-3 minutes.",
            "Add eggs, one at a time and beat until just combined after adding each egg",
            "Add all the lemon zest, the juice of one lemon, and vanilla extract. Whisk until combined",
            "In a small bowl combine the flour, baking powder, and salt",
            "Add the dry ingredients to the bowl of the stand mixer, beat until combined",
            "Pour the cake batter into the pan and bake for 20 minutes or until a toothpick inserted in the center comes out clean",
            "Poke holes into the cake with a toothpick while it's still warm",
            "In a bowl combine the powdered sugar and as much of the remaining lemon juice until the powdered sugar is incorporated and the consistency is thick but still runny",
            "Use a silicone spatula to spread the glaze on the warm cake. Let the cake rest until the glaze is set. This cake tastes even better after resting for a day at room temperature"
        ],
        notes: [
        ],
        uuid: 15
    },
    {
        name: "Trinchado",
        mealType: "main",
        mealSearch: ["beef", "pork", "stew", "red wine"],
        isVege: false,
        image: "/images/Trinchado.JPG",
        alt: "Beef Trinchado",
        ingredients: [
            "2 Tbs Worchester sauce"
        ],
        instructions: [
        ],
        notes: [
        ],
        uuid: 16
    },
    {
        name: "Käse Brötchen",
        mealType: "snackbread",
        mealSearch: ["cheese", "rolls"],
        isVege: true,
        image: "",
        alt: "Cheese breadroll image",
        ingredients: [
            "225ml Milk",
            "450gr Flour",
            "15ml dry yeast",
            "1 1/2 tsp salt",
            "1 tsp Zucker",
            "1 Egg",
            "150gr Creme Fraiche",
            "100gr grated cheese",
            "1 Egg for tops",
            "100gr grated cheese for top"
        ],
        instructions: [
            "Mix Flour and Yeast and then add all other ingredients except cheese and knead with a dough hook on a low settingbriefly and then on high for 5 minutes",
            "Knead the cheese in last and cover and leave in a warm place till it has risen",
            "Warm oven to 180 deg",
            "Knead the dough briefly on a floured surface, shape in to a roll and cut 10 equal pieces, then shape each piece into a bun and coat with egg and top off with cheese.",
            "Leave rolls to rise for 15 minutes",
            "Bake for about 15 minutes"
        ],
        notes: [
        ],
        uuid: 17
    },
    {
        name: "Knoblauch Aufstrich",
        mealType: "snackbread",
        mealSearch: ['garlic', 'dip', 'spread'],
        isVege: true,
        image: "",
        alt: "Garlic dip",
        ingredients: [
            "1 große Knoblauchknolle",
            "3 zweige Thymian",
            "1 El Oliveöl",
            "1 El Zitronensaft",
            "1 Dose weiße Bohnen",
            "Salz und Pfeffer"
        ],
        instructions: [
            "Ofen 200 Grad vorheizen",
            "Obere Spitze der Knoblauch knolle ca 1c breit abschneiden",
            "Thymian abbrausen, trockenschütteln, dann die Blättchen von der Stangeln abziehen und zusammen mit öl und Zitronen zu einer Marinade mischen",
            "Knoblauch mit der Schnittkante in der mArinade tauschen und unschlißend mit der schnittkante nach oben in eine kleine ofenfeste Form setze, übrige Marinade darüber täufeln, alles mit Backpapier abdecken und auf mittlerer schiene 30 min backen",
            "Weiße Bohnen in ein Sieb abschütten und abtropfen lassen",
            "Gebackenen Knoblauch kurz auskühlen, anschließend alle Zehen vorsichtig herausdrucken und zusammen mit die Bohnen zu einem cremigen Aufstrich püriern"
        ],
        notes: [
        ],
        uuid: 18
    },
    {
        name: "Avjar",
        mealType: "snackbread",
        mealSearch: ['aubergine', 'pepper', 'garlic', 'spread'],
        isVege: true,
        image: "",
        alt: "Avjar in bottle",
        ingredients: [
            '1 Aubergine',
            '2 Large Red Peppers',
            '1 Onion',
            '3 1/2 Tbsp Olive Oil',
            '2 Garlic cloves',
            '1 Red Chilli',
            '2 Tbsp Apple Cider Vinegar',
            '1 Tsp sugar',
            'Pepper',
            'Salt'
        ],
        instructions: [
            'Heat your oven to 200 deg celcius',
            "Rinse the vegetables",
            'Slice the aubergine lengthways in 1.5cm think slices',
            'Half the peppers and remove the seeds',
            'Peel and quater the onion',
            'Halve the garlic cloves',
            'Place all the veg on a baking tray and use 2 Tbsp of oil and coat the veges',
            'Pop in the oven for 35 minutes',
            'Slice the chilli in half, remove the stalk and seeds and chop very fine, mix it with the apple cider vinegar, sugar and the rest of the oil.',
            'Remove the aubergine and peppers from the skin, and squuze the garlic out of its casing',
            'Mix the veges and the rest of the ingredients together and puree, add some salt and pepper for flavour',
            'Put the mixture in a casserole pot and in the oven at 180 deg for around 1 hour to thicken'
        ],
        notes: [
            'This spread can be kept for a few days in the fridge',
            'It goes so well on fresh bread'
        ],
        uuid: 19
    },
    {
        name: "Naan bread",
        mealType: "snackbread",
        mealSearch: ['indian'],
        isVege: true,
        image: "",
        alt: "Naan Bread ",
        ingredients: [
            '50gr Butter',
            '350gr White Bread Flour',
            '7gr yeast',
            '1tsp salt',
            '1 tsp sugar',
            '100ml Greek Yoghurt',
            '150ml warm water'
        ],
        instructions: [
            'Melt the butter',
            'Mix flour, yeast, salt and sugar',
            'Make a well in the center and add yoghurt, water and butter',
            'Mix till it forms a ball',
            'Knead for about another 5 minutes',
            "Let it sit for an hour in a warm spot",
            'Preheat the oven to 230 deg and place a baking tray in it to warm up',
            'Knock the dough back, divide into 8 pieces and roll into flat breads',
            'Place on the heated tray, cook for 5 - 10 minutes'
        ],
        notes: [
            'Once cooked you can coat with butter and garlic for extra yumminess'
        ],
        uuid: 20
    },
    {
        name: "Strawberry Spinach Salat",
        mealType: "salad",
        mealSearch: ['spinach', 'strawberry', 'salad', 'feta', 'balsamic'],
        isVege: true,
        image: "",
        alt: "Spinach Strawberry Salad ",
        ingredients: [
            '1 bag baby Spinach',
            '3/4 cup chopped pecan nuts',
            '1 punnet fresh Strawberries sliced',
            '1 small red onion thinly sliced',
            '1 tbsp Dijon mustard',
            '1/2 cup olive oil',
            '1 tbsp honey',
            '1 1/2 tbsp sugar',
            '1/2 tbsp butter',
            '1/2 cup Balsamic vinegar'
        ],
        instructions: [
            'In a saucepan boil the balsamic till reduced to half',
            'Pour into a bowl and add the mustard and honey and whick together',
            'Add salt and pepper to taste',
            "In a pan over medium heat place pecans, butter and sugar and stir until caramelized",
            'Toss the spinach, strawberries and half the feta',
            'Drizzle 1/3 of dressing over salad, top with rest of feta and nuts',
            'Put rest of dressing on table to be used as needed.'
        ],
        notes: [
        ],
        uuid: 21
    },
    {
        name: "One Pot Orzo",
        mealType: "main",
        mealSearch: ['Chickpeas', 'zuchinni', 'spinach', 'Orzo rice'],
        isVege: true,
        image: "",
        alt: "One pot Orzo",
        ingredients: [
            '1 Tbsp Olive Oil',
            '1 cup diced onion',
            '1 Tbsp mined garlic',
            '1 can drained chickpeas',
            '2 cups cherry tomatoes',
            '1 cup diced zuchini',
            '500gr Orzo rice',
            '6 cups water',
            '1 cup peas',
            '2 cups chopped spinach',
            '1 tsp salt',
            '1/4 tsp Pepper',
            '1 tsp Garlic powder',

        ],
        instructions: [
            'Saute the onion, garlic, zuchini and chickpeas for a few minutes',
            'Add the Orzo and water (start with 4 cups water and add when needed)',
            'On medium heat stir continuously till the liquid is gone and rice is almost cooked',
            'Add the spinach and peas',
            'Wait 10mins and then taste',
            'Season with salt and pepper',
            'Serve with grated parmesan on top',
        ],
        notes: [
        ],
        uuid: 22
    },
    {
        name: "Farfalle with yoghurt paprika sauce",
        mealType: "main",
        mealSearch: ['Farfalle', 'pasta'],
        isVege: true,
        image: "",
        alt: "Farfalle with yoghurt paprika sauce",
        ingredients: [
            '250gr mini Farfalle pasta (no 7)',
            '400gr natural yoghurt',
            '3 cloves garlic pressed',
            '40gr butter',
            '2 teaspoons paprika powder',
            'Salt',
        ],
        instructions: [
            'Cook the farfelle till al-dente',
            'Mix the Yoghurt with the garlic and salt',
            'Heat the butter and mix with paprika powder and fry quickly',
            'Top the pasta with the yoghurt mix and drizzle over the paprika mixture.'
        ],
        notes: [
        ],
        uuid: 23
    },
    {
        name: "Granola Bars",
        mealType: "snackbread",
        mealSearch: ['healthy', 'oats', 'dates', 'raisens'],
        isVege: true,
        image: "",
        alt: "Granola bars",
        ingredients: [
            '240gr Oats',
            '350gr Dates',
            '200gr Raisens',
            '200gr Flax seeds',
            '350gr Seeds and nuts',
            '3 Tbsp Coconut Oil',
            '3 tsp Chia seeds',
            '3 tsp zimt',
        ],
        instructions: [
            'Preheat oven to 180 deg',
            'Put dates with oil and cover with boiling water to soften',
            'Mix dry ingredients together',
            'Blend dates, Oil, water and chia together till smooth',
            'Pour over dry ingredients and mix',
            'Pour into a lined tray and bake for 20 minutes',
            'Cut into bars and then cook for another 20 minutes',

        ],
        notes: [
        ],
        uuid: 24
    },
    {
        name: "Power Flapjacks",
        mealType: "snackbread",
        mealSearch: ['banana', 'peanut'],
        isVege: true,
        image: "",
        alt: "Power Flapjacks",
        ingredients: [
            '2 Bananas',
            '1 Egg',
            '2 Tbsp peanut butter'
        ],
        instructions: [
            'Mix all ingredients in a blender',
            'Drop into a hot pan in batches and fry',
            'Top with some honey or syrup'
        ],
        notes: [
        ],
        uuid: 25
    },
    {
        name: "Healthy Easy Banan Muffins",
        mealType: "snackbread",
        mealSearch: ['banana', 'muffin'],
        isVege: true,
        image: "",
        alt: "Banan Muffins",
        ingredients: [
            '2 Cups flour',
            '1/4 cup oats',
            '1 tsp baking powder',
            '1/2 tsp Cinnamon',
            '1/2 tsp salt',
            '2 or 3 large bananas',
            '2 eggs',
            '1/2 cup honey',
            '1/3 cup oil',
            '1/4 cup milk',
            'vanilla',

        ],
        instructions: [
            'Preheat oven to 180 deg',
            'Mix flour, oats, baking powder, zimt and salt',
            'Beat the bananas, eggs, honey, oil, milk and vanilla',
            'add dry ingredients',
            'Spoon in muffin pan and bake for between 15 and 20 minutes',

        ],
        notes: [
        ],
        uuid: 26
    },

]


/*
ideas:
banana muffins
Croatian rice meal
Crumpets
 
 
 
{
    name: "",
    mealType: "",
    mealSearch: [],
    isVege : "",
    image:"",
    alt: " ",
    ingredients: [
    ],
    instructions:[
    ],
    notes: [
    ],
    uuid: uuidv4()
},*/