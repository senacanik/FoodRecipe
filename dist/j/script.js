import recipes from "./data.js";

document.addEventListener('DOMContentLoaded', function() {
    

    /* Listing */
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');

    searchButton.addEventListener('click', function() {
        const searchQuery = searchInput.value.toLowerCase().trim();
        searchResults.innerHTML = '';

        // Yemek isminde arama kelimesini içeren tarifleri bul
        const foundRecipes = recipes.filter(recipe => 
            recipe.food.toLowerCase().includes(searchQuery)
        );

        // Tarifleri yemek ismine göre alfabetik olarak sırala
        foundRecipes.sort((a, b) => a.food.localeCompare(b.food));

        if (foundRecipes.length > 0) {
            foundRecipes.forEach(recipe => {
                
                const recipeRow = document.createElement('div');
                recipeRow.classList.add('recipe-row', 'row');

                const recipeItem = document.createElement('div');
                recipeItem.classList.add('col-12','col-md-6');

                const ingredientList = document.createElement('ul');
                ingredientList.classList.add('list-group', 'list-group-flush');
                recipe.ingredients.forEach(ingredient => {
                    const ingredientItem = document.createElement('li');
                    ingredientItem.classList.add('list-group-item');
                    ingredientItem.textContent = ingredient; 
                    ingredientList.appendChild(ingredientItem);
                });

                recipeItem.innerHTML = `
                <div class="card mb-5">
                    <img src="${recipe.image}" class="card-img-top" alt="${recipe.food}">
                    <div class="card-body">
                        <h3 class="card-title">${recipe.food}</h3>
                        <p class="card-text"><strong>Category:</strong> ${recipe.category}</p>
                        <p class="card-text"><strong>Recipe:</strong> ${recipe.recipe}</p>
                        <p><strong>Ingredients:</strong></p>
                    </div>
                </div>
            `;
            
                // Malzemeler için liste oluştur
                recipeItem.querySelector('.card').appendChild(ingredientList);
                recipeRow.appendChild(recipeItem);
                searchResults.appendChild(recipeRow);
            });
        } else {
            searchResults.innerHTML = '<p>No recipes found for this name.</p>';
        }
    });
});
