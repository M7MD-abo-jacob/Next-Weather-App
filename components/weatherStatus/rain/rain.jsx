import { random } from "../../../utils/functions";
import styles from "./rain.module.css";

function Rain() {
  return (
    <div className={styles.rain}>
      {(() => {
        const width = document.getElementById("top").offsetWidth;
        const height = document.getElementById("container").offsetHeight / 4;

        const rains = [];
        for (let i = 0; i < width; i += 7) {
          rains.push(
            <span
              className={styles.span}
              style={{
                "--rain-sp": `${random(10, 30)}`,
                "--rain-left": `${random(0, width - 20)}px`,
                "--rain-top": `${random(-10, 30)}px`,
                "--h": `${height}px`,
              }}
              key={i}
            ></span>
          );
        }
        return rains;
      })()}
    </div>
  );
}

export default Rain;
