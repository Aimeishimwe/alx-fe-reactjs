import React, { useState } from "react";
import useRecipeStore from "./recipeStore";

const EditRecipeForm = ({ recipe, onCancel }) => {
  const { updateRecipe } = useRecipeStore();
  const [formData, setFormData] = useState({
    name: recipe.name,
    description: recipe.description,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    updateRecipe(recipe.id, formData); // Update the recipe in the store
    onCancel(); // Close the edit form or perform other post-update actions
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit">Save Changes</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default EditRecipeForm;
