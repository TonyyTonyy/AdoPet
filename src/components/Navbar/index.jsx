import style from './style.module.css'
import IconProfile from '../IconProfile'
import img from '../../assets/Ellipse 2.svg'
import Logo from '../../assets/Vector.svg'

import { Link } from 'react-router-dom'
import FilterInput from '../FilterInput'
import ButtonRound from '../ButtonRound'
import React, { useState } from 'react';


const Navbar = (props) => {

    const toggleMenu = () => {
       
    };
    return (
        <nav className={style.nav}>
            <div>
                <Link to="/">
                    <img src={Logo} alt="Logo" width={190} height={100} />
                </Link>
            </div>
            <div>
                <FilterInput placeholder="Pesquisar por Animais..." />
            </div>
            <ul>
                <li>Ongs <br /> Protetores</li>
                <li><ButtonRound nome="Relatar Animal" className="bg_primary_500 black_100" /></li>
           
            {props.isLogged == "true" ? (
                    <li>
                        <IconProfile src={img} />
                    </li>

            ) : (
               <li>
                    <ButtonRound nome="Logar" className="black_100 bg_white_100" />
               </li>
            )}
         </ul>
        <i onClick={toggleMenu} className="bi bi-list fs-2"></i>


        </nav>
    )
}
export default Navbar;