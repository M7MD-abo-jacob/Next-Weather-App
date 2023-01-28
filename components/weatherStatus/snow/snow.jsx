import styles from "./snow.module.css";
import { random } from "../../../utils/functions";
import { BsSnow2 } from "react-icons/bs";

function Snow() {
  return (
    <div className={styles.snow}>
      {(() => {
        const width = document.getElementById("top").offsetWidth;
        const height = document.getElementById("container").offsetHeight / 4;

        const snows = [];
        for (let i = 0; i < width; i += 35) {
          snows.push(
            <span
              className={styles.span}
              style={{
                "--snow-sp": `${random(10, 20)}`,
                "--snow-left": `${random(0, width - 20)}px`,
                "--snow-top": `${random(-10, 30)}px`,
                "--snow-size": `${random(15, 30)}px`,
                "--h": `${height}px`,
              }}
              key={i}
            >
              <BsSnow2 />
            </span>
          );
        }
        return snows;
      })()}
    </div>
  );
}

export default Snow;
