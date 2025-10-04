import ThemeToggle from "./Themetoggle";
import SearchBar from "./searchbar";
import CategoryDropdown from "./categoryDropdown";
import PropTypes from "prop-types";

export default function Header({ category, onCategoryChange, query, onQueryChange }) {
  return (
    <header className="header-bar py-3 ">
      {/* Top Row: Logo Left | Title Center | Toggle Right */}
      <div className="d-flex align-items-center justify-content-between">
        
        {/* Left: Logo */}
        <img
          src="public/daily-news.png"  
          alt="Daily News Logo"
          className="logo-img"
        />

        {/* Center: Title */}
                <img
            src="public/images.jpg"
            alt="News Icon"
            className="center-img"
          />

        {/* Right: Toggle */}
        <div className="toggle-wrapper">
          <ThemeToggle />
        </div>
      </div>

      {/* Controls Row */}
      <div className="row g-3 mt-3">
        <div className="col-12 col-lg-4">
          <CategoryDropdown
            active={category}
            onChange={onCategoryChange}
            categories={[
              { key: "business", label: "Business" },
              { key: "sports", label: "Sports" },
              { key: "technology", label: "Tech" },
              { key: "health", label: "Health" },
            ]}
          />
        </div>
        <div className="col-12 col-lg-8">
          <SearchBar
            value={query}
            onChange={onQueryChange}
            placeholder="Search topics (e.g., AI, climate, elections)"
          />
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  category: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
  onQueryChange: PropTypes.func.isRequired,
};
