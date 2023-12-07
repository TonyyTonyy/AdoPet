import react from "react";
import style from "./style.module.css";


const CardPet = (props) => {
  return (
    <div className={`${style.Session}`}>
      <div className={` ${style.CardPet}`}>
        <div className={` ${style.compPet}`}>
          <div className={style.imgPet}>
            <img className={style.imgDog} src={props.url} alt="" />
            <div className={style.div1}>
              <div className={style.infoCard}>
                <span className={style.span}> Nome: </span>
                <p className={style.nome}>{props.nome}</p>
              </div>
            </div>
            <div className={style.div2}>
              <div className={style.infoCard2}>
                <span className={style.span}> Espécie: </span>
                <p className={style.nome}> {props.especie} </p>
              </div>

              <div className={style.infoCard2}>
                <span className={style.span}> Raça: </span>
                <p className={style.nome}>{props.raca}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardPet;
