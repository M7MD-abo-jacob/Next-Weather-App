import DayHour from "./dayHour";
import styles from "./today.module.css";

function Today(props) {
  const data = props.data.slice(1);

  return (
    <div className={styles.forcast_h}>
      {data.map((hour) => {
        return <DayHour data={hour} key={hour.time} />;
      })}
    </div>
  );
}

export default Today;
