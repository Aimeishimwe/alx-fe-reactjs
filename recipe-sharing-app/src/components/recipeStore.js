import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], // Initial state for recipes
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
}));

export default useRecipeStore;
