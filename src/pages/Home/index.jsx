import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Carrosel from "../../components/Carrossel";
import SessionPet from "../../components/SessionPet";
import Cachorro from "../../assets/Cachorro.svg";
import Gato from "../../assets/Gato.svg";
import styles from "./style.module.css";
import CardPet from "../../components/CardPet";
import { Link } from "react-router-dom";
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  if (isLoading) {
    return (
      <span className={styles.tela}>
        <span className={styles.loader}></span>
      </span>
    );
  }

  return (
    <>
      <Navbar />
      <div className={styles.container_menu}>
        <Carrosel />
        <div className="d-flex flex-wrap justify-content-md-around justify-content-center gap-3">
          <SessionPet animal="Cachorros" img={Cachorro} />
          <SessionPet animal="Gatos" img={Gato} />
        </div>

        <div className="d-flex overflow-scroll">
          <CardPet nome="Peludinho" especie="Cachorro" raca="Dalmata" />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" />
          <CardPet nome="Peludinho" especie="Cachorro" raca="Dalmata" />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" />
          <CardPet nome="Peludinho" especie="Cachorro" raca="Dalmata" />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" />
        </div>

        <div className="d-flex overflow-scroll">
          <CardPet nome="Peludinho" especie="Cachorro" raca="Dalmata" />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" />
          <CardPet nome="Peludinho" especie="Cachorro" raca="Dalmata" />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" />
          <CardPet nome="Peludinho" especie="Cachorro" raca="Dalmata" />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" />
        </div>
      </div>
    </>
  );
};

export default Home;
