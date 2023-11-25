import style from "./style.module.css";
import IconProfile from "../IconProfile";
import img from "../../assets/Ellipse 2.svg";
import Logo from "../../assets/Vector.svg";

import { Link } from "react-router-dom";
import FilterInput from "../FilterInput";
import ButtonRound from "../ButtonRound";
import React, { useState } from "react";

const Navbar = (props) => {
  const toggleMenu = () => {};
  return (
    <nav className={style.nav}>
      <div>
        <Link to="/">
          <img src={Logo} alt="Logo" className={style.logo} />
        </Link>
      </div>
      <div>
        <FilterInput placeholder="Pesquisar por Animais..." />
      </div>
      <ul>
      <Link style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' , textAlign: 'center'}} to="/Ongs" >
        <li>
          Ongs <br /> Protetores
        </li>
        </Link>
        <Link style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' , textAlign: 'center'}} to="/Relatorio" >
        <li>
          <ButtonRound
            nome="Relatar Animal"
            className="black_100"
          />
        </li>
        </Link>

        {props.isLogged == "true" ? (
          <li>
            <IconProfile src={img} />
          </li>
        ) : (
          <li>
            <ButtonRound nome="Logar" className="black_100" />
          </li>
        )}
      </ul>
      <i onClick={toggleMenu} className="bi bi-list fs-2"></i>
    </nav>
  );
};
export default Navbar;
