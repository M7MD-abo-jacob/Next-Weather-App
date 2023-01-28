import WeatherStatus from "./weatherStatus/weatherStatus";
import Search from "./search/search";

const Header = ({ status, handleOnSearchChange }) => {
  return (
    <header className="header" id="top">
      {status && <WeatherStatus data={status} />}
      <Search onSearchChange={handleOnSearchChange} />
    </header>
  );
};

export default Header;
