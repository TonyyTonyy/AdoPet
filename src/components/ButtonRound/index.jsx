import style from "./style.module.css";

const ButtonRound = (props) => {
  return (
    <div className={style.div_btn}>
      <button
        nome={props.nome}
        value={props.value}
        className={`${style.btn} ${props.className}`}
      >
        {props.nome}
      </button>
    </div>
  );
};
export default ButtonRound;
