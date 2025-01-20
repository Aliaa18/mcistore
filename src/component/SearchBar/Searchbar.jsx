import React , { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");

  // Debounce function
  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  const handleInputChange = debounce((value) => {
    onSearch(value); // Trigger search function
  }, 300); // Adjust debounce delay as needed

  const handleChange = (e) => {
    const value = e.target.value;
    setKeyword(value);
    handleInputChange(value);
  };

  return (
    <div className="w-100 mx-auto position-relative">
      <input
      id="input-search"
      className="w-100 rounded-5 py-2 px-3"
        type="text"
        value={keyword}
        onChange={handleChange}
        placeholder="Search for products..."
      />
      <i
        className="fas fa-search"
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          pointerEvents: "none",
         // Prevent interaction with the icon
        }}
      ></i>
    </div>





  );
};

export default SearchBar;
