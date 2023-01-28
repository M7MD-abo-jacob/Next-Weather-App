import styles from "./weekDay.module.css";

function WeekDay(props) {
  const data = props.data;
  const date = new Date(data.date);

  let options = { weekday: "short", day: "numeric", month: "numeric" };
  let day = Intl.DateTimeFormat("en", options).format(date);

  return (
    <div className={styles.day}>
      <div className={styles.day_name}>
        <p>{`${day}`} </p>
      </div>
      <div className={styles.day_temp}>
        <p className={styles.bold}>
          {data.temp_max}°/{data.temp_min}°
        </p>
      </div>
      <div className={styles.day_status}>
        <img
          className={styles.img}
          src={data.icon1}
          alt={"day weather status icon"}
        />{" "}
        <img
          className={styles.img}
          src={data.icon2}
          alt={"night weather status icon"}
        />
      </div>
    </div>
  );
}

export default WeekDay;
