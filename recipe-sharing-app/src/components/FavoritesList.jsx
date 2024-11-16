import React from 'react';
import useRecipeStore from './recipeStore';

/**
 * FavoritesList component displays the list of user's favorite recipes.
 * It retrieves the favorite recipes from the Zustand store and displays them.
 */
const FavoritesList = () => {
  // Retrieve favorite recipes from the Zustand store using the favorite recipe IDs
  const favorites = useRecipeStore(state => state.favorites.map(id =>
    state.recipes.find(recipe => recipe.id === id)  // Find recipe details by ID
  ));

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>My Favorites</h2>
      {favorites.length > 0 ? (
        favorites.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No favorite recipes found</p> 
      )}
    </div>
  );
};

export default FavoritesList;
