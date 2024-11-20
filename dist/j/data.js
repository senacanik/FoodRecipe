const recipes = [
        {
            "food": "Meatballs",
            "category": "Main Course",
            "image": "https://images.unsplash.com/photo-1601369791117-e473fc0da14d?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "recipe": "To prepare the meatballs, take minced meat in a bowl, add finely chopped onion, breadcrumbs, salt, spices, and egg. Mix, shape, and fry in hot oil.",
            "ingredients": ["Minced meat", "Onion", "Breadcrumbs", "Egg", "Salt", "Black pepper", "Cumin", "Oil"]
        },
        {
            "food": "Lahmacun",
            "category": "Main Course",
            "image": "https://media.istockphoto.com/id/1361075522/tr/foto%C4%9Fraf/turkish-foods-turkish-pizza-lahmacun.jpg?s=2048x2048&w=is&k=20&c=8m28lugDV1RbdYSGBKOir-TZ6eikxnVCSiKlH5F2oPA=",
            "recipe": "Roll out the dough, spread finely chopped meat, onion, tomato, pepper, and spice mixture on top, then bake in the oven.",
            "ingredients": ["Dough", "Minced meat", "Onion", "Tomato", "Pepper", "Tomato paste", "Spices"]
        },
        {
            "food": "Börek",
            "category": "Snack",
            "image": "https://images.unsplash.com/photo-1617806501736-fc7cab7c05bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "recipe": "Place cheese, spinach, or minced meat between layers of phyllo dough, then roll up. Brush with egg wash and bake in the oven.",
            "ingredients": ["Phyllo dough", "Cheese", "Spinach", "Minced meat", "Egg", "Salt", "Black pepper"]
        },
        {
            "food": "Manti",
            "category": "Main Course",
            "image": "https://media.istockphoto.com/id/1882854525/tr/foto%C4%9Fraf/turkish-traditional-food-ravioli-with-yoghurt-and-tomato-sauce-in-plate-manti.jpg?s=2048x2048&w=is&k=20&c=rq6sDDuBQzkQcMGt-hP_mTxnH67NLHiFVSfCyVOjPqc=",
            "recipe": "Roll out the dough, fill with minced meat filling, close it, and boil in hot water. Serve with yogurt and garlic.",
            "ingredients": ["Flour", "Egg", "Minced meat", "Onion", "Yogurt", "Garlic", "Salt", "Black pepper"]
        },
        {
            "food": "Iskender",
            "category": "Main Course",
            "image": "https://media.istockphoto.com/id/2061327605/tr/foto%C4%9Fraf/meat-doner-kebab-turkish-and-middle-eastern-cuisine-flavors-doner-kebab-on-stone-floor.jpg?s=2048x2048&w=is&k=20&c=7kNkfQCkVY2karND7pZAFqaZJLVYMyO8ZY6CPx6Hm8c=",
            "recipe": "Slice the döner thinly, break the pita bread into small pieces, and pour tomato sauce and yogurt on top. Drizzle with butter.",
            "ingredients": ["Döner", "Bread", "Tomato", "Yogurt", "Butter", "Pepper", "Spices"]
        },
        {
            "food": "Kısır",
            "category": "Salad",
            "image": "https://media.istockphoto.com/id/2148442698/tr/foto%C4%9Fraf/k%C4%B1s%C4%B1r.jpg?s=2048x2048&w=is&k=20&c=OkxjcHYrR6JURgJTF4WrgJ6W4Z5VrJa9AXrG8AoDlAs=",
            "recipe": "Soak the bulgur in hot water and let it swell. Add chopped vegetables, olive oil, and lemon, then mix.",
            "ingredients": ["Bulgur", "Tomato", "Cucumber", "Olive oil", "Lemon", "Salt", "Parsley"]
        },
        {
            "food": "Çörek",
            "category": "Snack",
            "image": "https://media.istockphoto.com/id/949586550/tr/foto%C4%9Fraf/%C3%A7ikolatal%C4%B1-kakaolu-t%C3%BCrk-ay-coregi.jpg?s=1024x1024&w=is&k=20&c=9FoEft440k8qCzc3-AloB1OJX4fFsZQCabfcldIoWp8=",
            "recipe": "Knead the dough and wait for it to rise, then shape it and bake in the oven. Sprinkle with nigella seeds on top.",
            "ingredients": ["Flour", "Egg", "Milk", "Salt", "Sugar", "Yeast"]
        },
        {
            "food": "Kumpir",
            "category": "Snack",
            "image": "https://media.istockphoto.com/id/2150862405/tr/foto%C4%9Fraf/kumpir.jpg?s=2048x2048&w=is&k=20&c=XMYqPRjd_c-IgoH-ozipFTXslpGIjQp7PgCJCj52vck=",
            "recipe": "Boil the potato and open it. Add butter and grated cheese inside. Top with any desired ingredients.",
            "ingredients": ["Potato", "Cheddar cheese", "Butter", "Olive oil", "Sausage", "Corn", "Olives"]
        },
        {
            "food": "Simit",
            "category": "Snack",
            "image": "https://media.istockphoto.com/id/646169134/tr/foto%C4%9Fraf/fresh-turkish-bagel.jpg?s=2048x2048&w=is&k=20&c=HLFyL3w8K2cJVecvVI96-yt8lK1YirHqjt-QJARIztI=",
            "recipe": "Knead the dough and shape it into small pieces. Dip in water, then coat with sesame seeds, and bake in the oven.",
            "ingredients": ["Flour", "Egg", "Water", "Sesame seeds", "Salt", "Sugar"]
        },
        {
            "food": "Lentil Soup",
            "category": "Soup",
            "image": "https://media.istockphoto.com/id/1498263887/tr/foto%C4%9Fraf/turkish-lentil-soup-mercimek-%C3%A7orbas%C4%B1.jpg?s=2048x2048&w=is&k=20&c=LopIuWVE2e8IpLzRpSk-429ZMCCIaeEMc4Lmxnhcna4=",
            "recipe": "Boil the lentils, then add onion, carrot, and potato. Stir and cook, seasoning with spices.",
            "ingredients": ["Lentils", "Onion", "Carrot", "Potato", "Vegetable oil", "Salt", "Black pepper"]
        },
        {
            "food": "Ashure",
            "category": "Dessert",
            "image": "https://media.istockphoto.com/id/2119081707/tr/foto%C4%9Fraf/ashure-dessert-with-legumes-and-dried-fruits-named-a%C5%9Fure-or-asure-noahs-pudding-in-the.jpg?s=2048x2048&w=is&k=20&c=pq0FDJ7CJmH4Jf2f5sdtEugEjBgLTnr565krUWsQzCw=",
            "recipe": "Add all ingredients to a pot and cook while stirring. Garnish with materials such as hazelnuts and pomegranate.",
            "ingredients": ["Wheat", "Chickpeas", "Beans", "Milk", "Sugar", "Walnuts", "Hazelnuts", "Pomegranate"]
        },
        {
            "food": "Kadayıf",
            "category": "Dessert",
            "image": "https://media.istockphoto.com/id/833149028/tr/foto%C4%9Fraf/tatlar-baklawa-tepsi-%C3%BCzerinde-arka-plan-geleneksel-t%C3%BCrk-tatl%C4%B1.jpg?s=2048x2048&w=is&k=20&c=ZAtF6pOeesjygJknCDExS2TaVGBfd2GUFF3bj4qSbls=",
            "recipe": "Layer the kadayıf dough with walnut or pistachio filling, bake in the oven, and pour syrup over the baked dessert.",
            "ingredients": ["Kadayıf dough", "Pistachio", "Walnut", "Sugar", "Water", "Lemon juice"]
        },
        {
            "food": "Baklava",
            "category": "Dessert",
            "image": "https://media.istockphoto.com/id/1481181212/tr/foto%C4%9Fraf/traditional-turkish-new-dessert-cold-milky-baklava-with-pistachio.jpg?s=2048x2048&w=is&k=20&c=ac5_u3DOY1Qho756asEUr4yJOKk9SyATn7JdkLjLO2E=",
            "recipe": "Roll out the baklava phyllo dough and place walnuts between the layers. After baking, pour syrup over it.",
            "ingredients": ["Phyllo dough", "Walnuts", "Sugar", "Water", "Butter"]
        }
        
]

export default recipes;
