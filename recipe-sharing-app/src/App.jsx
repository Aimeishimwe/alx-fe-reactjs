import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList'; // Import FavoritesList component
import RecommendationsList from './components/RecommendationsList'; // Import RecommendationsList component

const App = () => {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>Recipe Sharing App</h1>

        {/* Add recipe form */}
        <AddRecipeForm />

        {/* Recipe list */}
        <RecipeList />

        {/* Favorites and Recommendations section */}
        <div style={{ marginTop: '30px' }}>
          <FavoritesList />  {/* Display list of favorite recipes */}
          <RecommendationsList />  {/* Display personalized recipe recommendations */}
        </div>

        {/* Routes for individual recipe details */}
        <Routes>
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
