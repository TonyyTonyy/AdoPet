
import React from 'react';
import Navbar from '../../components/Navbar';
import style from './style.module.css';
import CardAnimal from '../../components/CardAnimal';
import animaisDATA from '../../constants/animais';
import TitleFiltro from '../../components/TitleFiltro';

const AnimaisFiltro = () => {
    return (
        <div className={`d-flex flex-column`}>
            <Navbar isLogged="true" />
            <div className={`d-flex flex-column flex-lg-row align-items-center align-items-lg-start`}>
            <div className={style.buscarCategoria}>
                <h2 className={style.h2}>Buscar por Categoria</h2>
                <div className={style.categoria}>
                    <h3>Cachorro</h3>
                    <ul className={style.animaisList}>
                        <li>Golden Retriever</li>
                        <li>Labrador Retriever</li>
                        <li>Poodle</li>
                        <li>Bulldog</li>
                        <li>Chihuahua</li>
                    </ul>
                </div>
                <div className={style.categoria}>
                    <h3>Gato</h3>
                    <ul className={style.animaisList}>
                        <li>Siamese</li>
                        <li>Persian</li>
                        <li>Maine Coon</li>
                        <li>Ragdoll</li>
                        <li>Bengal</li>
                    </ul>
                </div>
            </div>
           
            <div className={style.animalCardsContainer}>
                  <TitleFiltro animal="Cachorros" location="Bahia" />
                {animaisDATA.map((animalData, index) => (
                    <React.Fragment key={index}>
                        <CardAnimal {...animalData} />
                    </React.Fragment>
                ))}
            </div>
            </div>
        </div>
    );
};

export default AnimaisFiltro;
