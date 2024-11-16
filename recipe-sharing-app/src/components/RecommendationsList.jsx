import React, { useEffect } from 'react';
import useRecipeStore from '../recipeStore';

/**
 * RecommendationsList component shows personalized recipe recommendations
 * based on the user's favorites or other criteria from the Zustand store.
 * It fetches recommendations when the component is mounted.
 */
const RecommendationsList = () => {
  // Get the list of recommendations and the function to generate them from the store
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  useEffect(() => {
    // Generate recommendations when the component is mounted
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Recommended Recipes</h2>
      {recommendations.length > 0 ? (
        recommendations.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recommendations available</p>  
      )}
    </div>
  );
};

export default RecommendationsList;
