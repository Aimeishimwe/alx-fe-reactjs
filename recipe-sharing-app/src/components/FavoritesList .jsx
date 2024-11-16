import useRecipeStore from './recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore(state => state.favorites.map(id =>
    state.recipes.find(recipe => recipe.id === id)
  ));

  return (
    <div style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>My Favorites</h2>
      {favorites.map(recipe => (
        <div key={recipe.id} style={{ marginBottom: '15px' }}>
          <h3 style={{ fontSize: '1.25rem', color: '#333' }}>{recipe.title}</h3>
          <p style={{ fontSize: '1rem', color: '#555' }}>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
