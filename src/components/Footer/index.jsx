import style from "./style.module.css";
import react from "react";
import logoAdopet from "../../assets/logoAdopet.svg";
import iconeFacebook from "../../assets/FacebookIcon.svg";
import iconeInstagram from "../../assets/InstaIcon.svg";
import iconePinterest from "../../assets/PinrestIcon.svg";
import iconeTwitter from "../../assets/TwitterIcon.svg";

const Footer = (props) => {
  return (
    <>
      <div className={style.custom_shape_divider_bottom_1683068753}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={style.shape_fill}
          ></path>
        </svg>
      </div>
      <footer className={`${style.main_footer} `}>
        <div className={style.content}>
          <div className={style.colfooter}>
            <img src={logoAdopet} alt="Logo" />
            <p>
              A AdoPet cresce a cada dia, demonstrando que, juntos, somos uma
              força imparável na proteção e no amor pelos animais. Junte-se a
              nós nessa jornada que salva vidas, onde a compaixão é o guia e o
              futuro é cheio de esperança. AdoPet: onde o resgate se torna amor,
              e cada ato faz a diferença.
            </p>
          </div>

          <div className={style.colfooter}>
            <h4>Intitucional</h4>
            <ul>
              <li>
                <a href="#">Sobre a Adopet</a>
              </li>
              <li>
                <a href="#">Histórias de Impacto</a>
              </li>
              <li>
                <a href="#">Projetos Sociais</a>
              </li>
            </ul>
          </div>

          <div className={style.colfooter}>
          <h4>Como ajudar?</h4>
            <ul>
              <li>
                <a href="#">Quero adotar</a>
              </li>
              <li>
                <a href="#">Quero doar</a>
              </li>
              <li>
                <a href="#">ONGs/Protetores</a>
              </li>
            </ul>
           
          </div>
          <div className={style.colfooter}>
          <h4>Redes Sociais</h4>
            <ul className={style.social}>
              <li>
                <img src={iconeFacebook} alt="Icone Facebook" />
              </li>
              <li>
                <img src={iconeInstagram} alt="Icone Instagram" />
              </li>
              <li>
                <img src={iconePinterest} alt="Icone Pinterest" />
              </li>
              <li>
                <img src={iconeTwitter} alt="Icone Twitter" />
              </li>
            </ul>
          </div>

          <div className={style.clear}></div>
          </div>
          <div className={style.main_footer_copy}>
            <p className={style.m_b_footer}>
              {" "}
              AdoPet - 2023, todos os direitos reservados.  ®
            </p>
            <p className={style.by}>
              <i className={`${style.icon} icon-heart-3`}></i> Desenvolvido por:{" "}
              <a href="#" title="Loop Nerd">
                Gabriel Torres | Tony Cleriston | Vinicius Cerqueira Oliveira
              </a>
            </p>
          </div>
   
      </footer>
    </>
  );
};
export default Footer;
