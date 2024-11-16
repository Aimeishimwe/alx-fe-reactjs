import {create} from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], 
  searchTerm: '', 
  filteredRecipes: [], 
  favorites: [], // Array to store favorite recipe IDs
  recommendations: [], // Array for personalized recommendations

  addRecipe: (recipe) => set((state) => ({ recipes: [...state.recipes, recipe] })),

  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== id),
  })),
  
  toggleDone: (id) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === id ? { ...recipe, done: !recipe.done } : recipe
    ),
  })),
  
  setRecipes: (newRecipes) => set(() => ({ recipes: newRecipes })),
  
  updateRecipe: (id, updatedData) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === id ? { ...recipe, ...updatedData } : recipe
    ),
  })),
  
  setSearchTerm: (term) => set((state) => {
    const updatedState = { searchTerm: term };
    updatedState.filteredRecipes = state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
    return updatedState;
  }),

  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  })),

  // Add a recipe to favorites
  addFavorite: (recipeId) => set((state) => ({
    favorites: [...state.favorites, recipeId],
  })),

  // Remove a recipe from favorites
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter((id) => id !== recipeId),
  })),

  // Generate personalized recommendations based on favorites
  generateRecommendations: () => set((state) => {
    // Simple recommendation logic based on favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5 // Mock recommendation
    );
    return { recommendations: recommended };
  }),

}));

export default useRecipeStore;
