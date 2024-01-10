import { useState } from "react";
import SearchLogo from "../Logo/SearchLogo";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // replace this with actual search logic using searchTerm
    console.log("Search submitted:", searchTerm);
  };

  return (
    <>
      <form onSubmit={handleSearchSubmit}>
        <div className="search-body">
          <div className="search-details">
            <input
              type="text"
              placeholder="Search…"
              value={searchTerm}
              onChange={handleSearchChange}
              required
            />
          </div>
          <div className="search-button">
            <button type="submit">
              <div className="search-icon">
                <SearchLogo />
              </div>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchInput;
