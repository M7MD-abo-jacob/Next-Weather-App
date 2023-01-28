import styles from "./dayHour.module.css";
import { BsDropletFill } from "react-icons/bs";

function DayHour(props) {
  const data = props.data;

  return (
    <div className={styles.hour}>
      <div className={styles.hour_in}>
        <p className={styles.hour_p}>{data.time}</p>
        <img
          className={styles.img}
          src={data.icon}
          alt={"weather status icon"}
        />
        <p className={styles.hour_p}>{data.temp}°</p>
        <p className={styles.hour_p}>
          <BsDropletFill /> {data.humidity}%
        </p>
      </div>
    </div>
  );
}

export default DayHour;
