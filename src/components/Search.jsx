import React, { useEffect, useState } from "react";
import "../styles/index.css";
import SearchIcon from "../assets/search.svg";

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
    <div className="relative text-[#393E41] grid my-auto">
      <div className="flex gap-2 !m-[5px_0_5px_20px]">
        <input
          className="rounded-full relative bg-[#EBEBEB] border-1 border-solid border-[#393E41] !px-[10px] text-[16px] h-[30px] w-[140px]"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setShowRecentSearches(true)}
          placeholder="Search..."
        />
        <button
          onClick={handleSearch}
          className="bg-none relative right-[36px] text-white px-4 py-2  h-[30px]"
        >
          <img className="h-[20px] " src={SearchIcon} />
        </button>
      </div>

      {showRecentSearches && recentSearches.length > 0 && (
        <div
          className="bg-[#EBEBEB] w-full flex flex-col relative top-[5px] rounded-[4px]"
          onMouseLeave={() => setShowRecentSearches(false)}
        >
          <ul className="">
            {recentSearches.map((value, index) => (
              <li
                className="flex !pl-[4px] items-center !h-[30px] hover:bg-[#5a6063] hover:text-[#EBEBEB] first:rounded-t-[3px] last:rounded-b-[3px]"
                key={index}
                onClick={() => handleRecentSearchClick(value)}
              >
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
