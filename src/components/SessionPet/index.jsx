import styles from "./style.module.css";
import { Link } from "react-router-dom";

const SessionPet = (props) => {
  return (
    <>
      <Link
        style={{ textDecoration: "none", cursor: "pointer" }}
        to="/AnimaisFiltro"
        className="d-flex"
      >
        <div className={`d-flex ${styles.session_main} flex-grow-1`}>
          <div className={`flex-grow-1 bg-secondary`}>2</div>

          <h1 style={{ color: "black" }} className={`${styles.h1} `}>
            {props.animal}
          </h1>
          <img src={props.img} />
        </div>

        {/* <div
          className={`container-fluid d-flex align-items-center justify-content-center ${styles.session_main}`}
        >
          <div className={`row gap-5 text-center`}>
            <div className={`col-5 d-flex align-items-center`}>
              <h1 style={{ color: "black" }} className={`${styles.h1}`}>
                {props.animal}
              </h1>
            </div>
            <div className={`col-5 ${styles.image_box}`}>
              <img src={props.img} className="" />
            </div>
          </div>
        </div> */}
      </Link>
    </>
  );
};
export default SessionPet;
