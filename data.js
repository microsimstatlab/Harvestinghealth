/* =====================================================================
   HARVESTING HEALTH — CONTENT FILE
   Edit this file to add foods, handouts and links. You don't need to
   touch index.html. Keep the commas and quotes exactly like the examples.
   ===================================================================== */

/* ---------------------------------------------------------------------
   1. HANDOUTS (Recipes tab and Nutrient Guides tab)
   - Put the PDF in the "handouts" folder on GitHub.
   - Add one { ... } block below. type is "recipe" or "guide".
   - Leave file as "" to show the card without a file yet.
   --------------------------------------------------------------------- */
const HANDOUTS = [
  {
    type: "recipe",
    title: "Fruit Smoothie",
    description: "Garden to plate: frozen fruit, soy milk and 100% coconut water, plus the nutrition benefits of each ingredient. Serves 1.",
    tags: ["Heart-healthy", "No added sugar"],
    files: [
      { label: "Recipe card", file: "handouts/fruit-smoothie-recipe.png" }
    ],
    link: "smoothie.html",
    linkLabel: "Demo-event shopping calculator"
  },
  {
    type: "recipe",
    title: "Tzatziki",
    description: "A cool, refreshing Greek yogurt dip or spread with cucumber, garlic, lemon, dill and olive oil. Serves 4.",
    tags: ["Mediterranean", "No added sugar"],
    files: [
      { label: "Recipe card", file: "handouts/tzatziki-recipe.png" },
      { label: "Ingredient benefits", file: "handouts/tzatziki-ingredient-benefits.png" },
      { label: "Nutrition facts", file: "handouts/tzatziki-nutrition-facts.pdf" },
      { label: "Washing and storing herbs", file: "handouts/washing-and-storing-produce-herbs.png" }
    ],
    link: "#finder",
    linkLabel: "Scale it in Recipe Finder"
  },
  {
    type: "recipe",
    title: "Pico de Gallo",
    description: "Garden to plate: fresh tomatoes, onion, cilantro, lemon and a little olive oil. Includes the nutrition benefits of each ingredient. Serves 4.",
    tags: ["Heart-healthy", "No added sugar"],
    files: [
      { label: "Recipe card and nutrition benefits", file: "handouts/pico-de-gallo.pdf" }
    ],
    link: "#finder",
    linkLabel: "Scale it in Recipe Finder"
  },
  {
    type: "guide",
    title: "Nutrient Guide",
    description: "Macronutrients, amino acids, phytochemicals, micronutrients, minerals, vitamins, antioxidants and fiber: what they are and why they matter.",
    tags: ["Heart-healthy", "Low glycemic index"],
    file: "handouts/nutrient-guide.pdf"
  },
  {
    type: "guide",
    title: "Washing Produce and Storing Herbs",
    description: "Baking soda and vinegar methods for washing fruits and vegetables, how to wash herbs, and short- and long-term ways to store herbs.",
    tags: ["Food prep", "Herbs"],
    file: "handouts/washing-and-storing-produce-herbs.png"
  }
];

/* ---------------------------------------------------------------------
   2. TRUSTED RESOURCES (external links), grouped by topic
   --------------------------------------------------------------------- */
const RESOURCES = [
  {
    topic: "Diabetes and blood sugar",
    icon: "🩸",
    links: [
      { name: "Food and Nutrition", org: "American Diabetes Association",
        url: "https://diabetes.org/food-nutrition",
        about: "The ADA's hub for eating well with diabetes or prediabetes." },
      { name: "Diabetes Superstar Foods", org: "American Diabetes Association",
        url: "https://diabetes.org/food-nutrition/food-and-blood-sugar/diabetes-superstar-foods",
        about: "Nutrient-rich foods to build into a diabetes-friendly eating plan." },
      { name: "Meal Planning", org: "American Diabetes Association",
        url: "https://diabetes.org/food-nutrition/meal-planning",
        about: "Ways to plan balanced meals for diabetes." },
      { name: "Eating for Diabetes Management", org: "American Diabetes Association",
        url: "https://diabetes.org/food-nutrition/eating-for-diabetes-management",
        about: "How food choices help you manage diabetes day to day." }
    ]
  },
  {
    topic: "Blood pressure and heart health",
    icon: "❤️",
    links: [
      { name: "Managing Blood Pressure with a Heart-Healthy Diet", org: "American Heart Association",
        url: "https://www.heart.org/en/health-topics/high-blood-pressure/changes-you-can-make-to-manage-high-blood-pressure/managing-blood-pressure-with-a-heart-healthy-diet",
        about: "How eating patterns like DASH and cutting back on sodium help control high blood pressure." },
      { name: "DASH Eating Plan Tips: What to Eat vs. Limit (fact sheet)", org: "National Heart, Lung, and Blood Institute (NIH)",
        url: "https://www.nhlbi.nih.gov/resources/dash-eating-plan-tips-what-eat-vs-limit-fact-sheet-hoja-informativa-sobre-el-plan-de",
        about: "A quick fact sheet on which foods to eat and which to limit on DASH. Also available in Spanish." },
      { name: "DASH Eating Plan", org: "National Heart, Lung, and Blood Institute (NIH)",
        url: "https://www.nhlbi.nih.gov/health/dash-eating-plan",
        about: "A research-tested eating plan to lower blood pressure and LDL cholesterol, with daily serving goals." }
    ]
  },
  {
    topic: "Brain health",
    icon: "🧠",
    links: [
      { name: "Food and Eating", org: "Alzheimer's Association",
        url: "https://www.alz.org/help-support/caregiving/daily-care/food-eating",
        about: "Tips for caregivers on nutrition and mealtimes for people living with Alzheimer's and dementia." },
      { name: "Alzheimer's and Diet", org: "Cleveland Clinic",
        url: "https://my.clevelandclinic.org/watch/alzheimers-and-diet",
        about: "A video from Cleveland Clinic on how diet relates to Alzheimer's disease and brain health." }
    ]
  },
  {
    topic: "Reading nutrition labels",
    icon: "🏷️",
    links: [
      { name: "Making Sense of Food Labels", org: "American Diabetes Association",
        url: "https://diabetes.org/food-nutrition/reading-food-labels/making-sense-food-labels",
        about: "How to read the Nutrition Facts label, including serving size, carbohydrates, sodium and added sugars." }
    ]
  },
  {
    topic: "General healthy eating",
    icon: "🥗",
    links: [
      { name: "MyPlate", org: "U.S. Department of Agriculture",
        url: "https://www.myplate.gov/",
        about: "The five food groups, personalized food plans, recipes and tips." },
      { name: "Dietary Guidelines for Americans", org: "USDA and HHS",
        url: "https://www.dietaryguidelines.gov/",
        about: "The national, science-based guidance on what to eat and drink to promote health." }
    ]
  },
  {
    topic: "Look up nutrients in foods",
    icon: "🔬",
    links: [
      { name: "FoodData Central", org: "U.S. Department of Agriculture",
        url: "https://fdc.nal.usda.gov/",
        about: "The official U.S. database of the nutrients in thousands of foods." },
      { name: "Dietary Supplement Fact Sheets", org: "NIH Office of Dietary Supplements",
        url: "https://ods.od.nih.gov/factsheets/list-all/",
        about: "Fact sheets on each vitamin and mineral: what it does, how much you need and food sources." },
      { name: "Micronutrient Information Center", org: "Linus Pauling Institute, Oregon State University",
        url: "https://lpi.oregonstate.edu/mic",
        about: "Evidence reviews on vitamins, minerals and phytochemicals like flavonoids and carotenoids." }
    ]
  }
];

/* ---------------------------------------------------------------------
   3. FOOD DICTIONARY
   To add a food, copy one { ... } block and change it.
   - picture: put a photo in the "images" folder and write "images/kale.jpg",
     OR leave picture out and set emoji: "🥬".
   - The built-in drawings (art) are for the starter foods only.
   - group: "Fruit", "Vegetable", "Herb", "Healthy fat" or "Beverage"
   --------------------------------------------------------------------- */
const FOODS = [
  {
    name: "Tomato", art: "tomato", group: "Vegetable", color: "Red",
    summary: "Juicy and low in calories, tomatoes are best known for lycopene, the red pigment that gives them their color.",
    macro: "Mostly water (about 95%). Very low in calories, with a little fiber and natural sugar.",
    micro: ["Vitamin C", "Potassium", "Vitamin K", "Folate", "Vitamin A (from beta-carotene)"],
    phyto: ["Lycopene (carotenoid)", "Beta-carotene (carotenoid)", "Naringenin (flavonoid, in the skin)", "Chlorogenic acid (phenolic acid)"],
    benefits: "Diets rich in tomatoes and lycopene are linked in observational studies with lower risk of heart disease. Potassium supports healthy blood pressure.",
    tip: "Cook tomatoes with a little olive oil. Heat and fat make lycopene easier for your body to absorb."
  },
  {
    name: "Basil", art: "basil", group: "Herb", color: "Green",
    summary: "A fragrant herb that adds flavor without salt, and packs nutrients into a small amount.",
    macro: "Used in small amounts, so it adds almost no calories.",
    micro: ["Vitamin K (very high for its weight)", "Vitamin A (from beta-carotene)", "Manganese"],
    phyto: ["Rosmarinic acid (polyphenol)", "Eugenol (aromatic compound)", "Orientin and vicenin (flavonoids)"],
    benefits: "Fresh herbs let you season food with less salt, which supports healthy blood pressure.",
    tip: "Add fresh basil at the end of cooking to keep its flavor and aroma."
  },
  {
    name: "Onion", art: "onion", group: "Vegetable", color: "White / purple",
    summary: "A flavor base for countless dishes and one of the richest everyday sources of the flavonoid quercetin.",
    macro: "Low in calories. Contains fiber, including prebiotic fibers (fructans) that feed healthy gut bacteria.",
    micro: ["Vitamin C", "Vitamin B6", "Folate", "Potassium"],
    phyto: ["Quercetin (flavonoid; highest in red and yellow onions)", "Organosulfur compounds (sulfur compounds)", "Anthocyanins (flavonoid, in red onions)"],
    benefits: "Allium vegetables like onion and garlic are linked in observational studies with heart and digestive health.",
    tip: "Most of the quercetin is in the outer layers, so peel off only the papery skin."
  },
  {
    name: "Garlic", art: "garlic", group: "Vegetable", color: "White",
    summary: "A powerful flavor booster known for its sulfur compounds, which form when garlic is crushed or chopped.",
    macro: "Used in small amounts, so it adds very few calories.",
    micro: ["Manganese", "Vitamin B6", "Vitamin C", "Selenium"],
    phyto: ["Allicin (sulfur compound)", "Other organosulfur compounds"],
    benefits: "Garlic has been studied for modest effects on blood pressure and cholesterol. It also adds flavor so you can use less salt.",
    tip: "Crush or chop garlic and let it sit about 10 minutes before cooking. This gives allicin time to form."
  },
  {
    name: "Extra virgin olive oil", art: "oliveoil", group: "Healthy fat", color: "Golden green",
    summary: "The main fat in the Mediterranean diet, rich in monounsaturated fat and protective polyphenols.",
    macro: "100% fat, mostly monounsaturated (oleic acid). About 120 calories per tablespoon.",
    micro: ["Vitamin E", "Vitamin K"],
    phyto: ["Hydroxytyrosol (polyphenol)", "Oleocanthal (polyphenol)", "Oleuropein (polyphenol)"],
    benefits: "Using olive oil in place of butter and other saturated fats is linked with lower risk of heart disease. Mediterranean-style diets rich in olive oil reduced heart events in the PREDIMED trial.",
    tip: "Use it instead of butter, not on top of it. A little goes a long way because it's calorie-dense."
  },
  {
    name: "Soy milk", art: "soymilk", group: "Beverage", color: "Cream",
    summary: "A plant-based milk with the most protein of the common milk alternatives. Our preferred milk for smoothies.",
    macro: "About 7 to 8 grams of complete protein per cup (unsweetened), with some healthy fat.",
    micro: ["Calcium (when fortified)", "Vitamin D (when fortified)", "Vitamin B12 (when fortified)", "Potassium"],
    phyto: ["Isoflavones: genistein and daidzein (flavonoids)"],
    benefits: "Soy protein is a complete protein, containing all nine essential amino acids. Fortified soy milk can match dairy milk for calcium and vitamin D.",
    tip: "Choose unsweetened and fortified. Check the label for calcium and vitamin D."
  },
  {
    name: "Coconut water", art: "coconutwater", group: "Beverage", color: "Clear",
    summary: "The clear liquid inside young coconuts, naturally rich in potassium.",
    macro: "Low in calories. Carbohydrates come from natural sugars.",
    micro: ["Potassium (high)", "Magnesium", "Sodium (small amount)"],
    phyto: ["Small amounts of phenolic compounds"],
    benefits: "A source of potassium, which helps balance sodium and supports healthy blood pressure.",
    tip: "Buy 100% coconut water with NO SUGAR ADDED. Check the ingredient list for added sugars."
  },
  {
    name: "Avocado", art: "avocado", group: "Fruit", color: "Green",
    summary: "A creamy fruit full of healthy fats and fiber that helps you absorb nutrients from other foods.",
    macro: "Rich in monounsaturated fat and fiber, with little sugar.",
    micro: ["Potassium", "Folate", "Vitamin K", "Vitamin E", "Vitamin B5 (pantothenic acid)", "Vitamin B6"],
    phyto: ["Lutein and zeaxanthin (carotenoids)"],
    benefits: "Its healthy fats help your body absorb fat-soluble carotenoids from vegetables eaten in the same meal. Fiber and potassium support heart health.",
    tip: "Add avocado to salads and salsas to boost how much beta-carotene and lycopene you absorb."
  },
  {
    name: "Cilantro", art: "cilantro", group: "Herb", color: "Green",
    summary: "A bright, citrusy herb used in salsas and many cuisines.",
    macro: "Used in small amounts, so it adds almost no calories.",
    micro: ["Vitamin K", "Vitamin A (from beta-carotene)", "Vitamin C"],
    phyto: ["Quercetin and kaempferol (flavonoids)", "Lutein (carotenoid)", "Beta-carotene (carotenoid)"],
    benefits: "Like other fresh herbs, cilantro adds flavor so you can use less salt.",
    tip: "To some people cilantro tastes like soap. That's genetic. Try parsley instead."
  },
  {
    name: "Strawberry", art: "strawberry", group: "Fruit", color: "Red",
    summary: "A sweet berry and one of the best fruit sources of vitamin C.",
    macro: "Low in calories, with fiber and natural sugar.",
    micro: ["Vitamin C (about a full day's worth in one cup)", "Manganese", "Folate", "Potassium"],
    phyto: ["Anthocyanins, mainly pelargonidin (flavonoid)", "Ellagitannins and ellagic acid (polyphenol)", "Quercetin (flavonoid)"],
    benefits: "Berry intake is linked in studies with better heart and metabolic health. Vitamin C supports immunity and helps your body absorb iron from plant foods.",
    tip: "Frozen strawberries keep their nutrients and cost less out of season. Great for smoothies."
  },
  {
    name: "Banana", art: "banana", group: "Fruit", color: "Yellow",
    summary: "A convenient, affordable fruit known for potassium.",
    macro: "Mostly carbohydrate: natural sugars, plus fiber and resistant starch (more in greener bananas).",
    micro: ["Potassium", "Vitamin B6", "Vitamin C", "Manganese"],
    phyto: ["Small amounts of polyphenols, such as catechins"],
    benefits: "Potassium helps balance sodium and supports healthy blood pressure. Resistant starch acts as a prebiotic for gut bacteria.",
    tip: "Freeze ripe bananas in slices to make smoothies thick and creamy without added sugar."
  },
  {
    name: "Pineapple", art: "pineapple", group: "Fruit", color: "Yellow",
    summary: "A tropical fruit rich in vitamin C and manganese.",
    macro: "Carbohydrates from natural sugar, plus some fiber.",
    micro: ["Vitamin C", "Manganese", "Vitamin B6", "Thiamin (vitamin B1)"],
    phyto: ["Phenolic acids and flavonoids (polyphenols)", "Bromelain (a natural enzyme, not a phytonutrient)"],
    benefits: "Vitamin C supports immunity and collagen production for healthy skin and wound healing.",
    tip: "Choose fresh, frozen, or canned in its own juice, not syrup."
  },
  {
    name: "Blackberry", art: "blackberry", group: "Fruit", color: "Purple",
    summary: "One of the highest-fiber fruits, with deep purple anthocyanins.",
    macro: "Low in calories and very high in fiber for a fruit.",
    micro: ["Vitamin C", "Vitamin K", "Manganese"],
    phyto: ["Anthocyanins, mainly cyanidin (flavonoid)", "Ellagitannins (polyphenol)"],
    benefits: "Fiber supports digestion, fullness, blood sugar and cholesterol. Dark berries are among the richest sources of anthocyanins.",
    tip: "Toss frozen blackberries into smoothies, oatmeal, or plain yogurt."
  },
  {
    name: "Blueberry", art: "blueberry", group: "Fruit", color: "Blue",
    summary: "A small berry packed with anthocyanins, the pigments that make it blue.",
    macro: "Low in calories, with fiber and natural sugar.",
    micro: ["Vitamin C", "Vitamin K", "Manganese"],
    phyto: ["Anthocyanins (flavonoid)", "Quercetin (flavonoid)", "Chlorogenic acid (phenolic acid)"],
    benefits: "Blueberries are being studied for heart health and brain health. Higher intake is linked in observational studies with lower risk of type 2 diabetes.",
    tip: "Wild blueberries tend to have even more anthocyanins than regular blueberries."
  }
];
