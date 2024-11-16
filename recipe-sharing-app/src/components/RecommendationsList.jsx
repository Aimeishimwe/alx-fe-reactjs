import useRecipeStore  from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);

  return (
    <div style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Recommended Recipes</h2>
      {recommendations.map(recipe => (
        <div key={recipe.id} style={{ marginBottom: '15px' }}>
          <h3 style={{ fontSize: '1.25rem', color: '#333' }}>{recipe.title}</h3>
          <p style={{ fontSize: '1rem', color: '#555' }}>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
