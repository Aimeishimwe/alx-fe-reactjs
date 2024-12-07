import React, { useState } from "react";

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = "Title is required.";
    }
    if (
      !formData.ingredients.trim() ||
      formData.ingredients.split("\n").length < 2
    ) {
      newErrors.ingredients = "Please list at least two ingredients.";
    }
    if (!formData.steps.trim()) {
      newErrors.steps = "Preparation steps are required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully:", formData);
      setFormData({ title: "", ingredients: "", steps: "" }); // Reset the form
      setErrors({});
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Add New Recipe</h1>
      <form
        className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto"
        onSubmit={handleSubmit}
      >
        {/* Title Field */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-semibold mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className={`w-full p-3 border ${
              errors.title ? "border-red-500" : "border-gray-300"
            } rounded focus:outline-none focus:ring focus:ring-blue-300`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-2">{errors.title}</p>
          )}
        </div>

        {/* Ingredients Field */}
        <div className="mb-4">
          <label
            htmlFor="ingredients"
            className="block text-lg font-semibold mb-2"
          >
            Ingredients (one per line)
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleInputChange}
            rows="4"
            className={`w-full p-3 border ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            } rounded focus:outline-none focus:ring focus:ring-blue-300`}
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-2">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps Field */}
        <div className="mb-4">
          <label htmlFor="steps" className="block text-lg font-semibold mb-2">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={handleInputChange}
            rows="6"
            className={`w-full p-3 border ${
              errors.steps ? "border-red-500" : "border-gray-300"
            } rounded focus:outline-none focus:ring focus:ring-blue-300`}
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-sm mt-2">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded font-semibold hover:bg-blue-600 transition duration-200"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
