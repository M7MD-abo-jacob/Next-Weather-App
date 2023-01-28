import { FaWind } from "react-icons/fa";
import { BsDropletFill } from "react-icons/bs";
import styles from "./mainWeather.module.css";

function MainWeather(props) {
  const data = props.data;

  return (
    <div className={styles.main_w}>
      <div className={styles.left}>
        <div
          className={`${styles.name} ${styles.bold}`}
        >{`${data.name}, ${data.sys.country}`}</div>
        <div className={`${styles.temp} ${styles.bold}`}>
          {Math.round(data.main.temp)}°c
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.bold}>{data.weather[0].description}</div>
        <div className={styles.max_min}>
          {`feels like`}
          <span className={styles.bold}>{` ${Math.round(
            data.main.feels_like
          )}°`}</span>
        </div>
        <div className={`${styles.hu_wi} ${styles.bold}`}>
          <p>
            <BsDropletFill /> {data.main.humidity}%
          </p>
          <p>
            <FaWind /> {Math.round(data.wind.speed)}kmh
          </p>
        </div>
      </div>
    </div>
  );
}
export default MainWeather;
