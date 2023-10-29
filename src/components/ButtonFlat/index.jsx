import style from "./style.module.css";

const ButtonFlat = (props) => {
  return (
    <div className="d-flex">
      <button className={`${style.btn} ${props.className}`}>
        {props.nome}
      </button>
    </div>
  );
};

export default ButtonFlat;
