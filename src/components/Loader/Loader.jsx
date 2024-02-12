import styles from "./Loader.module.css";
import { FallingLines } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className={styles.loaderCont}>
      <FallingLines
        color="#bdef84"
        width="100"
        visible={true}
        ariaLabel="falling-circles-loading"
      />
    </div>
  );
};

