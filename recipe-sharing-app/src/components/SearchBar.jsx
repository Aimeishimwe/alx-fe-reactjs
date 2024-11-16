import React from 'react';
import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); 
  };

  return (
    <div style={{ margin: '20px 0', textAlign: 'center' }}>
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={handleSearchChange}
        style={{
          padding: '10px',
          fontSize: '16px',
          width: '80%',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />
    </div>
  );
};

export default SearchBar;
