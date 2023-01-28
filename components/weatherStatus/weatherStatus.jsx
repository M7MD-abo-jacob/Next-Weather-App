import Clear from "./clear/clear";
import Rain from "./rain/rain";
import Snow from "./snow/snow";
import styles from "./weatherStatus.module.css";

function WeatherStatus(props) {
  const data = props.data.slice(0, -1).toString();
  const dayTime = props.data.slice(-1) === "d";

  document.body.style.backgroundImage = dayTime
    ? "linear-gradient(rgb(112, 210, 255) 10%, #007 100%)"
    : "linear-gradient(#003 10%, #339 100%)";
  // const clear = [01, 02, 03, 04, 50];
  const rain = ["09", "10", "11"];
  const snow = ["13"];

  const status = (data) => {
    if (rain.includes(data)) {
      return <Rain />;
    } else if (snow.includes(data)) {
      return <Snow />;
    } else {
      return <Clear data={dayTime} />;
    }
  };

  return (
    <div className={styles.weather_status}>
      {status(data)}
      {/* back static clouds */}
      <div className={styles.cloud_l}>
        <div className={`${styles.cl1} ${styles.cl_gray}`}></div>
        <div className={`${styles.cl2} ${styles.cl_gray}`}></div>
        <div className={`${styles.cl3} ${styles.cl_gray}`}></div>
      </div>
      <div className={styles.cloud_l2}>
        <div className={`${styles.cl1} ${styles.cl_gray}`}></div>
        <div className={`${styles.cl2} ${styles.cl_gray}`}></div>
        <div className={`${styles.cl3} ${styles.cl_gray}`}></div>
      </div>
      <div className={styles.cloud_l3}>
        <div className={`${styles.cl1} ${styles.cl_gray}`}></div>
        <div className={`${styles.cl2} ${styles.cl_gray}`}></div>
        <div className={`${styles.cl3} ${styles.cl_gray}`}></div>
      </div>

      {/* middle long moving clouds */}
      <div
        className={`${styles.cloud_l} ${styles.cls3}`}
        style={{ "--left": "100px" }}
      >
        <div
          className={`${styles.cl1} ${styles.cl31} ${styles.cl_whitish}`}
        ></div>
        <div
          className={`${styles.cl2} ${styles.cl32} ${styles.cl_whitish}`}
        ></div>
      </div>
      <div
        className={`${styles.cloud_l} ${styles.cls31}`}
        style={{ "--left": "400px" }}
      >
        <div
          className={`${styles.cl1} ${styles.cl31} ${styles.cl_whitish}`}
        ></div>
        <div
          className={`${styles.cl2} ${styles.cl32} ${styles.cl_whitish}`}
        ></div>
      </div>

      {/* small moving clouds */}
      <div className={`${styles.cloud_s} ${styles.cl_white}`}></div>
      <div
        className={`${styles.cloud_s} ${styles.cs2} ${styles.cl_white}`}
      ></div>
      <div
        className={`${styles.cloud_s} ${styles.cs3} ${styles.cl_white}`}
      ></div>
    </div>
  );
}

export default WeatherStatus;
