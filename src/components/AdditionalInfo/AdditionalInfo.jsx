import { NavLink } from "react-router-dom";
import styles from "./AdditionalInfo.module.css";

export const AdditionalInfo = () => {
  return (
    <>
      <hr></hr>
      <div className={styles.cont}>
        <p className={styles.subTitle}>Additional information</p>
        <ul className={styles.list}>
          <li>
            <NavLink to="cast" className={styles.link}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" className={styles.link}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <hr></hr>
    </>
  );
};

// export default AdditionalInfo;