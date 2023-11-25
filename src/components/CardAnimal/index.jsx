import React from 'react';
import style from './style.module.css';

const CardAnimal = ({ nome, especie, idade, raca, isMacho, isFavorito, imagemSrc }) => {
    const iconeGenero = isMacho ? '♂' : '♀';

    return (
        <div className={style.animalCard}>
           
            <img src={imagemSrc} alt={nome} className={style.animalImage} />
            <div className={style.animalInfo}>
                <div className={style.cardContent}>
                    <p>Nome: <span>{nome}</span></p>
                    <div className={`d-flex flex-row gap-4 ${style.animalSpecie}`}>
                        <p>Espécie: <span>{especie}</span></p>
                        <p>Idade aprox:<span> {idade}</span></p>
                        <p className={style.raca}>Raça: <span>{raca}</span></p>
                    </div>
                </div>
            </div>
            <div className={style.iconContainer}>
                    <span className={style.sexIcon}>{iconeGenero}</span>
                    <span className={style.favoriteIcon}>{isFavorito ? '❤️' : '🤍'}</span>
                </div>
        </div>
    );
};

export default CardAnimal;
