import {create} from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], 
  searchTerm: '', 
  filteredRecipes: [], 

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
}));

export default useRecipeStore;
