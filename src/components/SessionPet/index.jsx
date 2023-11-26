import styles from "./style.module.css";
import { Link } from "react-router-dom";

const SessionPet = (props) => {
  return (
    <>
      <div className={`${props.className}`}>
        <Link
          style={{ textDecoration: "none", cursor: "pointer" }}
          to="/AnimaisFiltro"
        >
          <div
            className={`d-flex justify-content-between align-items-center ${styles.session_main} px-5`}
          >
            <h1 style={{ color: "black" }} className={`${styles.h1} `}>
              {props.animal}
            </h1>
            <img src={props.img} className={`${styles.img}`} />
          </div>
        </Link>
      </div>
    </>
  );
};
export default SessionPet;
