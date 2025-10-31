import styles from "./servicesstyle.module.css";

const ServicesCard = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.cardImg}>
          <img src="/assets/imgs/web.png" alt="service" />
        </div>

        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>Web Development</h3>
          <p className={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            consequuntur unde praesentium provident vel vitae culpa. Rerum
            quisquam
          </p>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardImg}>
          <img src="/assets/imgs/web.png" alt="service" />
        </div>

        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>Web Development</h3>
          <p className={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            consequuntur unde praesentium provident vel vitae culpa. Rerum
            quisquam
          </p>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardImg}>
          <img src="/assets/imgs/web.png" alt="service" />
        </div>

        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>Web Development</h3>
          <p className={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            consequuntur unde praesentium provident vel vitae culpa. Rerum
            quisquam
          </p>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardImg}>
          <img src="/assets/imgs/web.png" alt="service" />
        </div>

        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>Web Development</h3>
          <p className={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            consequuntur unde praesentium provident vel vitae culpa. Rerum
            quisquam
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
