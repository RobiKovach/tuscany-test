const SearchButton = ({ onSearch, texts }) => {
  return (
    <button onClick={onSearch} className="tab__search">
      <img
        className="search-icon"
        src={`${process.env.PUBLIC_URL}/img/icons-search.svg`}
        alt="Search"
      />
      {texts.search}
    </button>
  );
};

export default SearchButton;
