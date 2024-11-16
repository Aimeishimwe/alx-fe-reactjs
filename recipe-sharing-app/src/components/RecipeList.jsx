import  useRecipeStore  from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  if (recipes.length === 0) {
    return <p>No recipe found to display.</p>;
  }

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            {/* Pass the recipeId via Link to the RecipeDetails page */}
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
