import React from 'react';
import RecipeList from './components/RecipeList'; // Ensure RecipeList exists and matches this path
import AddRecipeForm from './components/AddRecipeForm'; // Ensure AddRecipeForm exists and matches this path

const App = () => {
  return (
    <div>
      <h1>Recipe Sharing Application</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
};

export default App;
