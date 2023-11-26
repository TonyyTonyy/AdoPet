import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Carrosel from "../../components/Carrossel";
import SessionPet from "../../components/SessionPet";
import Cachorro from "../../assets/Cachorro.svg";
import Gato from "../../assets/Gato.svg";
import styles from "./style.module.css";
import CardPet from "../../components/CardPet";
import TitleSection from "../../components/TitleSection";
import CarrouselItem from "../../components/CarrouselItem";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
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
          <SessionPet
            animal="Cachorros"
            className="flex-grow-1"
            img={Cachorro}
          />
          <SessionPet animal="Gatos" className="flex-grow-1" img={Gato} />
        </div>

        <TitleSection title="Animais para Você" />
        <CarrouselItem>
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
        </CarrouselItem>

        <TitleSection title="Cachorros" />
        <CarrouselItem>
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
        </CarrouselItem>

        <TitleSection title="Gatos" />
        <CarrouselItem>
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
        </CarrouselItem>

        <TitleSection title="Ongs" />
        <CarrouselItem>
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
        </CarrouselItem>
      </div>
      <Footer />
    </>
  );
};

export default Home;
