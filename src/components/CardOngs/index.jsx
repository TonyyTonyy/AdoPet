import style from "./style.module.css";
import ButtonRound from "../ButtonRound";

const CardOngs = (props) => {
  return (
    <div className={style.card}>
      <img src={props.foto} />
      <h1>{props.nome}</h1>
      <h3>{props.localizacao}</h3>
      <a>
        <button>Ver Mais</button>
      </a>
    </div>
  );
};
export default CardOngs;
