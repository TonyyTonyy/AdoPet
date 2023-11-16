import react from "react";
import style from "./style.module.css";
import imgPet from "../../assets/Cachorro-imagem.svg";

const CardPet = (props) => {
  return (
    <div className={`${style.Session}`}>
      <div className={` ${style.CardPet}`}>
        <div className={` ${style.compPet}`}>
          <div className={style.imgPet}>
            <img className={style.imgDog} src={imgPet} alt="" />
            <div className={style.div1}>
              <div className={style.infoCard}>
                <span className={style.span}> Nome: </span>
                <p className={style.nome}>Peludim</p>
              </div>
            </div>
            <div className={style.div2}>
              <div className={style.infoCard2}>
                <span className={style.span}> Espécie: </span>
                <p className={style.nome}> Cachorro </p>
              </div>

              <div className={style.infoCard2}>
                <span className={style.span}> Raça: </span>
                <p className={style.nome}>XXXXX</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={` ${style.CardPet}`}>
        <div className={` ${style.compPet}`}>
          <div className={style.imgPet}>
            <img className={style.imgDog} src={imgPet} alt="" />
            <div className={style.div1}>
              <div className={style.infoCard}>
                <span className={style.span}> Nome: </span>
                <p className={style.nome}>Peludim</p>
              </div>
            </div>

            <div className={style.div2}>
              <div className={style.infoCard2}>
                <span className={style.span}> Espécie: </span>
                <p className={style.nome}> Cachorro </p>
              </div>

              <div className={style.infoCard2}>
                <span className={style.span}> Raça: </span>
                <p className={style.nome}>XXXXX</p>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};
export default CardPet;
