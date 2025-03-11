import React, { useEffect, useState } from "react";
import "../styles/index.css";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const [showRecentSearches, setShowRecentSearches] = useState(false);

  useEffect(() => {
    const savedSearches = localStorage.getItem("recentSearches");
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
  }, [recentSearches]);

  const handleSearch = () => {
    if (searchValue.trim() === "") return;

    if (!recentSearches.includes(searchValue)) {
      const updatedSearches = [searchValue, ...recentSearches.slice(0, 4)];
      setRecentSearches(updatedSearches);
    }

    console.log(`Searching for: ${searchValue}`);

    setShowRecentSearches(false);
  };

  const handleRecentSearchClick = (value) => {
    setSearchValue(value);
    handleSearch();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
  };

  return (
    <div className="relative w-full h-[100px] text-[#EB7BC0]">
      <div>
        <input
          className=""
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setShowRecentSearches(true)}
          placeholder="Search..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {showRecentSearches && recentSearches.length > 0 && (
        <div className="" onMouseLeave={() => setShowRecentSearches(false)}>
          <div>
            <span className="">Recent Searches</span>
            <button onClick={clearRecentSearches}>Clear All</button>
          </div>
          <ul className="">
            {recentSearches.map((value, index) => (
              <li key={index} onClick={() => handleRecentSearchClick(value)}>
                {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
