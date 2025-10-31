import { NavLink } from "react-router-dom";
import styles from "../MainSection/mainsectionstyle.module.css";

const MainSection = () => {
  return (
    <>
      <div className={styles["main-section"]}>
        <div className={styles["content-box"]}>
          <h1>Learning Made Easy</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
            veniam laboriosam nostrum repellat eaque aliquid expedita commodi
            explicabo sequi asperiores praesentium qui natus, omnis quod unde
            aperiam non debitis? Aliquam.
          </p>
          <div className={styles.btnbox}>
            <div className={styles.btn}>
              <NavLink to="" className={styles["fancy-btn"]}>
                <span>For More Info</span>
              </NavLink>
            </div>
          </div>
        </div>
        <div className={styles["img-container"]}>
          <img src="/assets/imgs/mainsection.png" alt="img" />
        </div>
      </div>
    </>
  );
};

export default MainSection;
