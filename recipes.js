/* =====================================================================
   HARVESTING HEALTH — RECIPE FINDER LIBRARY
   Two parts:
   1. INGREDIENTS: nutrition per 100 g (from USDA FoodData Central,
      rounded). Used to estimate nutrition facts.
      kcal, protein, carbs, fiber, sugar, fat, satfat (grams), sodium, potassium (mg)
      "pick" = name shown in the ingredient picker (leave out to hide it).
   2. RECIPES: each ingredient line is
      ["ingredient id", amount, "unit", grams per 1 unit, "description"]
      tags: "dash", "lowgi", "med"
   ===================================================================== */

const INGREDIENTS = {
  tomato:      {pick:"Tomato", grp:"Produce", n:[18,0.9,3.9,1.2,2.6,0.2,0.03,5,237]},
  cannedtomato:{pick:"Tomato", grp:"Produce", n:[21,0.9,4.4,1.0,2.6,0.3,0.04,20,220]},
  basil:       {pick:"Basil", grp:"Herbs", n:[23,3.2,2.7,1.6,0.3,0.6,0.04,4,295]},
  onion:       {pick:"Onion", grp:"Produce", n:[40,1.1,9.3,1.7,4.2,0.1,0.04,4,146]},
  garlic:      {pick:"Garlic", grp:"Produce", n:[149,6.4,33,2.1,1,0.5,0.09,17,401]},
  oliveoil:    {pick:"Olive oil", grp:"Pantry", n:[884,0,0,0,0,100,13.8,2,1]},
  soymilk:     {pick:"Soy milk", grp:"Dairy & alternatives", n:[33,2.9,1.2,0.5,0.3,1.6,0.2,37,120]},
  coconutwater:{pick:"Coconut water", grp:"Pantry", n:[19,0.7,3.7,1.1,2.6,0.2,0.2,105,250]},
  avocado:     {pick:"Avocado", grp:"Produce", n:[160,2,8.5,6.7,0.7,14.7,2.1,7,485]},
  cilantro:    {pick:"Cilantro", grp:"Herbs", n:[23,2.1,3.7,2.8,0.9,0.5,0.01,46,521]},
  strawberry:  {pick:"Strawberry", grp:"Produce", n:[32,0.7,7.7,2,4.9,0.3,0.02,1,153]},
  banana:      {pick:"Banana", grp:"Produce", n:[89,1.1,22.8,2.6,12.2,0.3,0.1,1,358]},
  pineapple:   {pick:"Pineapple", grp:"Produce", n:[50,0.5,13.1,1.4,9.9,0.1,0.01,1,109]},
  blackberry:  {pick:"Blackberry", grp:"Produce", n:[43,1.4,9.6,5.3,4.9,0.5,0.01,1,162]},
  blueberry:   {pick:"Blueberry", grp:"Produce", n:[57,0.7,14.5,2.4,10,0.3,0.03,1,77]},
  spinach:     {pick:"Spinach", grp:"Produce", n:[23,2.9,3.6,2.2,0.4,0.4,0.06,79,558]},
  bellpepper:  {pick:"Bell pepper", grp:"Produce", n:[31,1,6,2.1,4.2,0.3,0.03,4,211]},
  cucumber:    {pick:"Cucumber", grp:"Produce", n:[15,0.7,3.6,0.5,1.7,0.1,0.04,2,147]},
  zucchini:    {pick:"Zucchini", grp:"Produce", n:[17,1.2,3.1,1,2.5,0.3,0.08,8,261]},
  carrot:      {pick:"Carrot", grp:"Produce", n:[41,0.9,9.6,2.8,4.7,0.2,0.04,69,320]},
  sweetpotato: {pick:"Sweet potato", grp:"Produce", n:[86,1.6,20.1,3,4.2,0.05,0.02,55,337]},
  lemon:       {pick:"Lemon", grp:"Produce", n:[22,0.4,6.9,0.3,2.5,0.2,0.04,1,103]},
  lime:        {pick:"Lime", grp:"Produce", n:[25,0.4,8.4,0.4,1.7,0.1,0.01,2,117]},
  blackbeans:  {pick:"Black beans", grp:"Beans & grains", n:[132,8.9,23.7,8.7,0.3,0.5,0.1,5,355]},
  chickpeas:   {pick:"Chickpeas", grp:"Beans & grains", n:[164,8.9,27.4,7.6,4.8,2.6,0.27,7,291]},
  whitebeans:  {pick:"White beans", grp:"Beans & grains", n:[118,8.3,21.1,6.2,0.3,0.4,0.1,2,391]},
  lentilsdry:  {pick:"Lentils", grp:"Beans & grains", n:[352,24.6,63.4,10.7,2,1.1,0.15,6,677]},
  quinoa:      {pick:"Quinoa", grp:"Beans & grains", n:[120,4.4,21.3,2.8,0.9,1.9,0.23,7,172]},
  brownrice:   {pick:"Brown rice", grp:"Beans & grains", n:[123,2.7,25.6,1.6,0.2,1,0.26,4,86]},
  wwpasta:     {pick:"Whole-wheat pasta", grp:"Beans & grains", n:[348,14.6,75,8.3,2.7,1.4,0.26,8,215]},
  oats:        {pick:"Oats", grp:"Beans & grains", n:[379,13.2,67.7,10.1,1,6.5,1.1,6,362]},
  corntortilla:{pick:"Corn tortillas", grp:"Beans & grains", n:[218,5.7,44.6,6.3,0.9,2.9,0.4,45,186]},
  chicken:     {pick:"Chicken", grp:"Proteins", n:[120,22.5,0,0,0,2.6,0.56,45,370]},
  salmon:      {pick:"Salmon", grp:"Proteins", n:[208,20.4,0,0,0,13.4,3.1,59,363]},
  eggs:        {pick:"Eggs", grp:"Proteins", n:[143,12.6,0.7,0,0.4,9.5,3.1,142,138]},
  tofu:        {pick:"Tofu", grp:"Proteins", n:[144,17.3,2.8,2.3,0.6,8.7,1.3,14,237]},
  greekyogurt: {pick:"Greek yogurt", grp:"Dairy & alternatives", n:[59,10.2,3.6,0,3.2,0.4,0.1,36,141]},
  feta:        {pick:"Feta cheese", grp:"Dairy & alternatives", n:[264,14.2,4.1,0,4.1,21.3,14.9,1116,62]},
  walnuts:     {pick:"Walnuts", grp:"Pantry", n:[654,15.2,13.7,6.7,2.6,65.2,6.1,2,441]},
  jalapeno:    {pick:"Jalapeño", grp:"Produce", n:[29,0.9,6.5,2.8,4.1,0.4,0.09,3,248]},
  dill:        {pick:"Dill", grp:"Herbs", n:[43,3.5,7,2.1,0,1.1,0.06,61,738]},
  chia:        {pick:"Chia seeds", grp:"Pantry", n:[486,16.5,42.1,34.4,0,30.7,3.3,16,407]},
  broth:       {grp:"Pantry", n:[6,0.3,1,0,0.5,0.1,0,58,30]},
  soysauce:    {grp:"Pantry", n:[53,8.1,4.9,0.8,0.4,0.6,0.1,3333,212]},
  salt:        {grp:"Pantry", n:[0,0,0,0,0,0,0,38758,8]},
  spice:       {grp:"Pantry", n:[0,0,0,0,0,0,0,0,0]},
  water:       {grp:"Pantry", n:[0,0,0,0,0,0,0,0,0]}
};

const RECIPES = [
  {
    name:"Tzatziki", emoji:"🥒", servings:4, time:"10 min prep + 30 min chill", meal:"Snack",
    tags:["lowgi","med"],
    about:"A cool, refreshing Greek yogurt dip or spread. A Harvesting Health team recipe.",
    ing:[
      ["cucumber",1,"",201,"cucumber (grated or finely diced)"],
      ["garlic",2,"cloves",3,"garlic, minced"],
      ["oliveoil",4,"Tbsp",13.5,"extra virgin olive oil"],
      ["greekyogurt",500,"g",1,"unflavored plain Greek yogurt"],
      ["lemon",1.5,"Tbsp",15,"lemon juice"],
      ["dill",3,"Tbsp",1,"fresh dill, chopped (a good bunch)"]
    ],
    steps:[
      "Prep the cucumber: grate or finely dice it. If grating, squeeze out the extra liquid in a clean kitchen towel so the dip stays thick.",
      "Mix the base: combine the yogurt with the garlic and lemon juice. Stir well.",
      "Add the cucumber and dill.",
      "Drizzle with the olive oil, then cover and refrigerate 30 minutes before serving.",
      "Keep refrigerated in an airtight container. Lasts about 3 to 5 days. Pairs well with bread or pita, veggies (carrots, celery, radish), or as a topping for chicken or fish."
    ],
    facts:{size:"about 1 cup (¼ recipe)", cal:220, fat:"17g", sat:"4g", chol:"15mg", na:"45mg", carb:"8g", fib:"1g", sug:"5g", added:"0g", pro:"13g", k:"380mg",
      extra:{"Calcium":"170mg","Iron":"0.4mg","Vitamin C":"6mg","Vitamin E":"2mg","Vitamin K":"20mcg","Vitamin D":"0mcg"}}
  },
  {
    name:"Fruit Smoothie", emoji:"🥤", servings:1, time:"5 min", meal:"Breakfast or snack",
    tags:["dash"],
    about:"Garden to plate. A fast, nutritious breakfast or snack from the Harvesting Health team. Add chia seeds for fiber and texture, or plant-based protein powder for extra protein.",
    ing:[
      ["pineapple",0.5,"cup",165,"frozen pineapple (or mango)"],
      ["strawberry",0.5,"cup",150,"frozen strawberries"],
      ["soymilk",0.5,"cup",243,"soy milk (or other plant-based milk)"],
      ["coconutwater",0.5,"cup",240,"coconut water (no sugar added)"]
    ],
    steps:["Add all the ingredients to the blender and blend until smooth.","Add more coconut water as needed to adjust the thickness.","Serve and enjoy!"]
  },
  {
    name:"Pico de Gallo", emoji:"🍅", servings:4, time:"15 min", meal:"Side or snack",
    tags:["dash","lowgi","med"],
    about:"Garden to plate. A fresh, no-cook salsa from the Harvesting Health team. Best enjoyed sharing style!",
    ing:[
      ["tomato",4,"",62,"roma tomatoes, finely chopped"],
      ["onion",0.5,"medium",110,"onion, finely chopped"],
      ["lemon",1,"",45,"lemon, juiced (or 1 lime)"],
      ["cilantro",0.25,"cup",16,"fresh cilantro, finely chopped"],
      ["oliveoil",0.5,"Tbsp",13.5,"olive oil"],
      ["jalapeno",0.5,"",14,"jalapeño or serrano pepper, finely chopped (optional; remove seeds for less heat)"]
    ],
    steps:[
      "In a medium bowl, combine the chopped tomatoes, onion, cilantro and optional pepper.",
      "Add the lemon juice and olive oil.",
      "Mix well and let sit at least 15 to 30 minutes so the flavors blend.",
      "Serve and enjoy! Try both lime and lemon for extra tangy flavor, or swap the cilantro for parsley."
    ]
  },
  {
    name:"Tomato Avocado Basil Salad", emoji:"🥗", servings:4, time:"10 min", meal:"Side",
    tags:["dash","lowgi","med"],
    about:"A fresh, no-cook salad. The olive oil and avocado help you absorb the tomatoes' lycopene.",
    ing:[
      ["tomato",3,"medium",123,"tomatoes, cut into chunks"],
      ["avocado",1,"",136,"ripe avocado, diced"],
      ["onion",0.25,"cup",160,"red onion, thinly sliced"],
      ["basil",0.5,"cup",24,"fresh basil leaves, torn"],
      ["oliveoil",1,"Tbsp",13.5,"extra virgin olive oil"],
      ["lemon",1,"Tbsp",15,"lemon juice"],
      ["salt",0.125,"tsp",6,"salt"],
      ["spice",1,"pinch",0,"black pepper"]
    ],
    steps:["Combine the tomatoes, avocado and red onion in a bowl.","Drizzle with olive oil and lemon juice, then sprinkle with salt and pepper.","Toss gently, top with basil and serve."]
  },
  {
    name:"Black Bean and Pico de Gallo Salad", emoji:"🫘", servings:4, time:"15 min", meal:"Lunch",
    tags:["dash","lowgi","med"],
    about:"Fiber-rich beans with fresh pico de gallo. Great on its own, over greens or with corn tortillas.",
    ing:[
      ["blackbeans",1.5,"cups",172,"black beans, cooked or no-salt-added canned, rinsed"],
      ["tomato",2,"medium",123,"tomatoes, diced"],
      ["onion",0.5,"cup",160,"onion, finely chopped"],
      ["bellpepper",1,"",119,"red bell pepper, diced"],
      ["cilantro",0.25,"cup",16,"cilantro, chopped"],
      ["garlic",1,"clove",3,"garlic, minced"],
      ["lime",2,"Tbsp",15,"lime juice"],
      ["oliveoil",1,"Tbsp",13.5,"extra virgin olive oil"],
      ["spice",0.5,"tsp",0,"ground cumin"],
      ["salt",0.125,"tsp",6,"salt"]
    ],
    steps:["Rinse and drain the beans.","Mix the tomatoes, onion, bell pepper, cilantro and garlic in a large bowl.","Add the beans, lime juice, olive oil, cumin and salt. Stir well.","Let sit 10 minutes so the flavors blend."]
  },
  {
    name:"Fresh Guacamole with Veggie Dippers", emoji:"🥑", servings:4, time:"10 min", meal:"Snack",
    tags:["dash","lowgi","med"],
    about:"Creamy guacamole served with crunchy vegetables instead of chips.",
    ing:[
      ["avocado",2,"",136,"ripe avocados"],
      ["tomato",1,"medium",123,"tomato, diced"],
      ["onion",0.25,"cup",160,"red onion, finely chopped"],
      ["cilantro",0.25,"cup",16,"cilantro, chopped"],
      ["garlic",1,"clove",3,"garlic, minced"],
      ["lime",2,"Tbsp",15,"lime juice"],
      ["salt",0.125,"tsp",6,"salt"],
      ["bellpepper",1,"",119,"bell pepper, cut into strips"],
      ["cucumber",1,"",201,"cucumber, sliced"],
      ["carrot",2,"medium",61,"carrots, cut into sticks"]
    ],
    steps:["Mash the avocados with the lime juice in a bowl.","Stir in the tomato, onion, cilantro, garlic and salt.","Serve with the bell pepper, cucumber and carrots for dipping."]
  },
  {
    name:"Mediterranean Chickpea Salad", emoji:"🥙", servings:4, time:"15 min", meal:"Lunch",
    tags:["dash","lowgi","med"],
    about:"Chickpeas, crunchy vegetables, herbs and a little feta with a lemon and olive oil dressing.",
    ing:[
      ["chickpeas",1.5,"cups",164,"chickpeas, cooked or no-salt-added canned, rinsed"],
      ["cucumber",1,"",201,"cucumber, diced"],
      ["tomato",1,"cup",149,"cherry tomatoes, halved"],
      ["onion",0.25,"cup",160,"red onion, finely chopped"],
      ["basil",0.25,"cup",24,"fresh basil, chopped"],
      ["feta",0.25,"cup",152,"crumbled feta cheese"],
      ["oliveoil",2,"Tbsp",13.5,"extra virgin olive oil"],
      ["lemon",2,"Tbsp",15,"lemon juice"],
      ["garlic",1,"clove",3,"garlic, minced"],
      ["spice",0.5,"tsp",0,"dried oregano"]
    ],
    steps:["Whisk the olive oil, lemon juice, garlic and oregano in a large bowl.","Add the chickpeas, cucumber, tomatoes and red onion. Toss to coat.","Top with feta and basil. Serve right away or chill up to 2 days."]
  },
  {
    name:"Lemon Garlic Salmon with Tomatoes and Zucchini", emoji:"🐟", servings:4, time:"25 min", meal:"Dinner",
    tags:["dash","lowgi","med"],
    about:"A one-pan dinner with omega-3-rich salmon and roasted vegetables.",
    ing:[
      ["salmon",1,"lb",454,"salmon fillets, cut into 4 pieces"],
      ["zucchini",2,"medium",196,"zucchini, sliced"],
      ["tomato",2,"cups",149,"cherry tomatoes"],
      ["garlic",3,"cloves",3,"garlic, minced"],
      ["oliveoil",1.5,"Tbsp",13.5,"extra virgin olive oil"],
      ["lemon",2,"Tbsp",15,"lemon juice"],
      ["basil",0.25,"cup",24,"fresh basil, chopped"],
      ["salt",0.25,"tsp",6,"salt"],
      ["spice",0.25,"tsp",0,"black pepper"]
    ],
    steps:["Heat the oven to 400°F (200°C).","Toss the zucchini and tomatoes with 1 Tbsp olive oil and half the garlic on a sheet pan. Roast 10 minutes.","Push the vegetables aside and add the salmon. Brush with the remaining oil, garlic and lemon juice, and season with salt and pepper.","Roast 10 to 12 minutes, until the salmon flakes easily. Top with basil."]
  },
  {
    name:"Garlic Herb Chicken and Quinoa Bowl", emoji:"🍗", servings:4, time:"30 min", meal:"Dinner",
    tags:["dash","lowgi","med"],
    about:"Lean chicken over quinoa and spinach, topped with a fresh avocado and tomato salsa.",
    ing:[
      ["chicken",1,"lb",454,"boneless skinless chicken breast"],
      ["quinoa",2,"cups",185,"cooked quinoa"],
      ["spinach",2,"cups",30,"baby spinach"],
      ["tomato",1,"cup",149,"cherry tomatoes, halved"],
      ["avocado",1,"",136,"avocado, diced"],
      ["onion",0.25,"cup",160,"red onion, chopped"],
      ["cilantro",0.25,"cup",16,"cilantro, chopped"],
      ["garlic",3,"cloves",3,"garlic, minced"],
      ["oliveoil",1.5,"Tbsp",13.5,"extra virgin olive oil"],
      ["lime",2,"Tbsp",15,"lime juice"],
      ["spice",1,"tsp",0,"dried oregano"],
      ["salt",0.25,"tsp",6,"salt"]
    ],
    steps:["Rub the chicken with 1 Tbsp olive oil, garlic, oregano and salt.","Cook in a skillet over medium heat 6 to 7 minutes per side, until it reaches 165°F (74°C). Let rest, then slice.","Mix the tomatoes, avocado, onion, cilantro, lime juice and remaining oil to make a salsa.","Build bowls with spinach, quinoa, chicken and salsa."]
  },
  {
    name:"Hearty Lentil and Tomato Soup", emoji:"🍲", servings:6, time:"40 min", meal:"Dinner",
    tags:["dash","lowgi","med"],
    about:"A budget-friendly, high-fiber soup made with pantry staples.",
    ing:[
      ["lentilsdry",1,"cup",192,"dry brown or green lentils, rinsed"],
      ["cannedtomato",1,"can (14.5 oz)",411,"no-salt-added diced tomatoes"],
      ["broth",4,"cups",240,"low-sodium vegetable broth"],
      ["water",1,"cup",240,"water"],
      ["onion",1,"medium",110,"onion, chopped"],
      ["carrot",2,"medium",61,"carrots, chopped"],
      ["garlic",3,"cloves",3,"garlic, minced"],
      ["spinach",3,"cups",30,"spinach"],
      ["oliveoil",1,"Tbsp",13.5,"extra virgin olive oil"],
      ["spice",1,"tsp",0,"ground cumin"],
      ["lemon",1,"Tbsp",15,"lemon juice"],
      ["salt",0.25,"tsp",6,"salt"]
    ],
    steps:["Heat the olive oil in a large pot over medium heat. Cook the onion and carrots 5 minutes.","Add the garlic and cumin and cook 1 minute.","Add the lentils, tomatoes, broth and water. Bring to a boil, then simmer 25 to 30 minutes until the lentils are tender.","Stir in the spinach until wilted. Add the lemon juice and salt."]
  },
  {
    name:"Whole-Wheat Pasta with Fresh Tomato Basil Sauce", emoji:"🍝", servings:4, time:"25 min", meal:"Dinner",
    tags:["dash","lowgi","med"],
    about:"A light, fresh sauce with white beans for extra protein and fiber. Cook the pasta al dente for a lower glycemic effect.",
    ing:[
      ["wwpasta",8,"oz",28.35,"dry whole-wheat pasta"],
      ["tomato",4,"medium",123,"tomatoes, chopped"],
      ["whitebeans",1.5,"cups",172,"white beans, cooked or no-salt-added canned, rinsed"],
      ["garlic",3,"cloves",3,"garlic, minced"],
      ["oliveoil",2,"Tbsp",13.5,"extra virgin olive oil"],
      ["basil",0.5,"cup",24,"fresh basil, chopped"],
      ["salt",0.25,"tsp",6,"salt"],
      ["spice",0.25,"tsp",0,"red pepper flakes (optional)"]
    ],
    steps:["Cook the pasta al dente according to the package, without salt. Drain.","Warm the olive oil in a large skillet. Cook the garlic 1 minute.","Add the tomatoes and cook 5 to 7 minutes until saucy. Stir in the beans to warm through.","Toss with the pasta, basil, salt and red pepper flakes."]
  },
  {
    name:"Berry Overnight Oats", emoji:"🫐", servings:2, time:"5 min + overnight", meal:"Breakfast",
    tags:["dash","med"],
    about:"A make-ahead breakfast with whole-grain oats, soy milk protein and berries.",
    ing:[
      ["oats",1,"cup",80,"old-fashioned rolled oats"],
      ["soymilk",1,"cup",243,"unsweetened soy milk"],
      ["chia",1,"Tbsp",12,"chia seeds"],
      ["blueberry",0.5,"cup",148,"blueberries"],
      ["strawberry",0.5,"cup",152,"strawberries, sliced"],
      ["spice",0.5,"tsp",0,"cinnamon"]
    ],
    steps:["Stir the oats, soy milk, chia seeds and cinnamon in a jar or container.","Cover and refrigerate overnight, or at least 4 hours.","Top with berries before eating."]
  },
  {
    name:"Black Bean and Sweet Potato Tacos", emoji:"🌮", servings:4, time:"30 min", meal:"Dinner",
    tags:["dash"],
    about:"Roasted sweet potato and black beans in corn tortillas with avocado and cilantro.",
    ing:[
      ["sweetpotato",2,"medium",130,"sweet potatoes, peeled and diced"],
      ["blackbeans",1.5,"cups",172,"black beans, cooked or no-salt-added canned, rinsed"],
      ["corntortilla",8,"",26,"6-inch corn tortillas"],
      ["avocado",1,"",136,"avocado, sliced"],
      ["onion",0.5,"cup",160,"red onion, chopped"],
      ["cilantro",0.25,"cup",16,"cilantro, chopped"],
      ["oliveoil",1,"Tbsp",13.5,"extra virgin olive oil"],
      ["lime",2,"Tbsp",15,"lime juice"],
      ["spice",1,"tsp",0,"ground cumin and chili powder"],
      ["salt",0.25,"tsp",6,"salt"]
    ],
    steps:["Heat the oven to 425°F (220°C). Toss the sweet potato with oil, spices and salt. Roast 20 to 25 minutes until tender.","Warm the beans in a small pot.","Warm the tortillas in a dry skillet.","Fill each tortilla with sweet potato, beans, avocado, onion and cilantro. Squeeze lime on top."]
  },
  {
    name:"Spinach, Tomato and Basil Egg Scramble", emoji:"🍳", servings:4, time:"15 min", meal:"Breakfast",
    tags:["lowgi","med"],
    about:"A quick, protein-rich breakfast loaded with vegetables.",
    ing:[
      ["eggs",8,"large",50,"eggs"],
      ["spinach",3,"cups",30,"spinach"],
      ["tomato",1,"cup",149,"cherry tomatoes, halved"],
      ["onion",0.5,"cup",160,"onion, chopped"],
      ["garlic",1,"clove",3,"garlic, minced"],
      ["oliveoil",1,"Tbsp",13.5,"extra virgin olive oil"],
      ["basil",0.25,"cup",24,"fresh basil, chopped"],
      ["spice",0.25,"tsp",0,"black pepper"]
    ],
    steps:["Whisk the eggs and pepper in a bowl.","Heat the olive oil in a nonstick skillet. Cook the onion 3 minutes, then the garlic and tomatoes 2 minutes.","Add the spinach and stir until wilted.","Pour in the eggs and stir gently until set. Top with basil."]
  },
  {
    name:"Greek Yogurt Berry Parfait", emoji:"🍓", servings:2, time:"5 min", meal:"Breakfast",
    tags:["dash","lowgi","med"],
    about:"Protein-rich yogurt layered with fiber-packed berries, walnuts and chia.",
    ing:[
      ["greekyogurt",1.5,"cups",227,"plain nonfat Greek yogurt"],
      ["blackberry",0.5,"cup",144,"blackberries"],
      ["blueberry",0.5,"cup",148,"blueberries"],
      ["strawberry",0.5,"cup",152,"strawberries, sliced"],
      ["walnuts",2,"Tbsp",7.5,"walnuts, chopped"],
      ["chia",2,"tsp",4,"chia seeds"],
      ["spice",0.25,"tsp",0,"cinnamon"]
    ],
    steps:["Layer yogurt and berries in two glasses or bowls.","Top with walnuts, chia seeds and a sprinkle of cinnamon."]
  },
  {
    name:"Pineapple Avocado Salsa", emoji:"🍍", servings:4, time:"10 min", meal:"Side",
    tags:["dash","med"],
    about:"A sweet and tangy salsa to serve with chicken, fish, beans or as a snack.",
    ing:[
      ["pineapple",1.5,"cups",165,"pineapple, diced"],
      ["avocado",1,"",136,"avocado, diced"],
      ["bellpepper",1,"",119,"red bell pepper, diced"],
      ["onion",0.25,"cup",160,"red onion, finely chopped"],
      ["cilantro",0.25,"cup",16,"cilantro, chopped"],
      ["lime",2,"Tbsp",15,"lime juice"],
      ["salt",1,"pinch",0.4,"salt"]
    ],
    steps:["Combine everything in a bowl and stir gently.","Chill 15 minutes to let the flavors blend."]
  },
  {
    name:"Garlic Tofu and Veggie Stir-Fry", emoji:"🥢", servings:4, time:"25 min", meal:"Dinner",
    tags:["dash"],
    about:"Plant protein and colorful vegetables over brown rice, with low-sodium soy sauce.",
    ing:[
      ["tofu",14,"oz",28.35,"firm tofu, pressed and cubed"],
      ["bellpepper",2,"",119,"bell peppers, sliced"],
      ["onion",1,"medium",110,"onion, sliced"],
      ["spinach",3,"cups",30,"spinach"],
      ["garlic",4,"cloves",3,"garlic, minced"],
      ["oliveoil",1.5,"Tbsp",13.5,"olive or canola oil"],
      ["soysauce",1.5,"Tbsp",16,"low-sodium soy sauce"],
      ["lime",1,"Tbsp",15,"lime juice"],
      ["brownrice",2,"cups",195,"cooked brown rice"]
    ],
    steps:["Heat 1 Tbsp oil in a large skillet over medium-high heat. Cook the tofu 8 to 10 minutes, turning, until golden. Set aside.","Add the remaining oil, onion and peppers. Stir-fry 4 to 5 minutes.","Add the garlic and spinach and cook until wilted.","Return the tofu, add the soy sauce and lime juice, and toss. Serve over brown rice."]
  },
  {
    name:"Tropical Green Smoothie", emoji:"🍌", servings:2, time:"5 min", meal:"Snack",
    tags:["dash"],
    about:"Spinach blends in unnoticed with pineapple, banana and coconut water.",
    ing:[
      ["spinach",2,"cups",30,"baby spinach"],
      ["pineapple",1,"cup",165,"frozen pineapple"],
      ["banana",1,"medium",118,"banana, frozen in slices"],
      ["soymilk",1,"cup",243,"unsweetened soy milk"],
      ["coconutwater",0.5,"cup",240,"100% coconut water, no sugar added"],
      ["chia",1,"Tbsp",12,"chia seeds"]
    ],
    steps:["Add the soy milk, coconut water and spinach to the blender and blend until smooth.","Add the pineapple, banana and chia seeds. Blend again until creamy."]
  }
];
