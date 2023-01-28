import Today from "../footer/dayHours/today";
import MainWeather from "./mainWeather";

const Weather = ({ currentWeather, hoursForcast }) => {
  return (
    <div className="today">
      <div className="main now">
        <MainWeather data={currentWeather.data} />
      </div>
      <div className="main">
        <p>24-Hour forcast</p>
        <Today data={hoursForcast} />
      </div>
    </div>
  );
};

export default Weather;
