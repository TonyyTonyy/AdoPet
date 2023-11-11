import style from "./styles.module.css";

const TitleFiltro = (props) => {
  return (
    <div className={`${style.div}`}>
      <h1 className={`${style.h1}`}>{props.animal} - {props.location}</h1>
    </div>
  );
};

export default TitleFiltro;