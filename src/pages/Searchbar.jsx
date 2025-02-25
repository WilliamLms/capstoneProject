<<<<<<< HEAD
import PropTypes from "prop-types";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search games..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="border p-2 rounded-lg w-full mb-4"
    />
  );
};

// Prop validation
SearchBar.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};

export default SearchBar;
=======
const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
      <input
        type="text"
        placeholder="Search games..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border p-2 rounded-lg w-full mb-4"
      />
    );
  };
  
  export default SearchBar;
>>>>>>> 22c2807eac3dd708936b2ddd63a06dafc5e9e738
