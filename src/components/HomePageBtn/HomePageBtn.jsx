import { NavLink, useLocation } from "react-router-dom";
import styles from "./HomePageBtn.module.css";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRef } from "react";

function HomePageBtn() {
  const location = useLocation();
  const backRef = useRef(location.state);

  return (
    <NavLink to={backRef.current ?? "/"} className={styles.link}>
      <IoIosArrowRoundBack />
      Go Back
    </NavLink>
  );
}

export default HomePageBtn;