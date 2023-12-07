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
import CardOngsHome from "../../components/CardOngsHome";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import CardOngs_DATA from "../../constants/constants"

const img1 = 'https://www.petz.com.br/blog/wp-content/uploads/2020/03/cachorro-de-rua-1280x720.jpg'
const img2 = 'https://totosdatete.org.br/wp-content/uploads/2021/06/capa-site-1.jpg'
const img3 = 'https://www.petz.com.br/blog//wp-content/uploads/2020/03/cachorro-de-rua-pet.jpg'
const img4 = 'data:image/jpeg;base64,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'
const imgCat1 = 'https://www.itaquaquecetuba.sp.gov.br/wp-content/uploads/2019/02/zoonoses-animais-1-antonio-marcio.jpg'
const imgCat2 = 'https://maceioalgovbr.dhost.cloud/uploads/imagens/07-02-23-Pets-para-Feira-de-Adocao-Zoonoses-Victor-Vercant-SMS-39.jpg'
const imgCat3 = 'https://itu.sp.gov.br/wp-content/uploads/2023/03/Feira-de-adocao-de-animais-ocorre-neste-sabado_gato.jpg'
const imgCat4 = 'https://s2-g1.glbimg.com/UeYnnaT_UAMs8QqPVuRiC1RLXhA=/0x0:1040x780/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/6/I/vXAGeJSMiqFyMwtYrpPQ/gatinho-ccz.jpg'

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
          <CardPet nome="Peludinho" especie="Cachorro" raca="Dalmata" url={img1} />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" url={img2} />
          <CardPet nome="Tanatos" especie="Cachorro" raca="SRD" url={img3} />
          <CardPet nome="Toby" especie="Cachorro" raca="SRD" url={img4} />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" url={img1} />
          <CardPet nome="Peludinho" especie="Cachorro" raca="Dalmata" url={img1} />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" url={img1} />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" url={img1} />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" url={img1} />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" url={img1} />
          <CardPet nome="Peludinho" especie="Cachorro" raca="Dalmata" url={img1} />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" url={img1} />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" url={img1} />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" url={img1} />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" url={img1} />
        </CarrouselItem>

        <TitleSection title="Cachorros" />
        <CarrouselItem>
          <CardPet nome="Peludinho" especie="Cachorro" raca="Dalmata" url={img1} />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" url={img2} />
          <CardPet nome="Tanatos" especie="Cachorro" raca="SRD" url={img3} />
          <CardPet nome="Toby" especie="Cachorro" raca="SRD" url={img4} />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" url={img1} />
          <CardPet nome="Peludinho" especie="Cachorro" raca="Dalmata" url={img1} />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" url={img1} />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" url={img1} />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" url={img1} />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" url={img1} />
          <CardPet nome="Peludinho" especie="Cachorro" raca="Dalmata" url={img1} />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" url={img1} />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" url={img1} />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" url={img1} />
          <CardPet nome="Rex" especie="Cachorro" raca="SRD" url={img1} />
        </CarrouselItem>

        <TitleSection title="Gatos" />
        <CarrouselItem>
          <CardPet nome="Peludinho" especie="Gato" raca="Siames" url={imgCat1} />
          <CardPet nome="Rex" especie="Gato" raca="SRD" url={imgCat2} />
          <CardPet nome="Tanatos" especie="Gato" raca="Sphynx" url={imgCat3} />
          <CardPet nome="Toby" especie="Gato" raca="SRD" url={imgCat4} />
          <CardPet nome="Peludinho" especie="Gato" raca="Siames" url={imgCat1} />
          <CardPet nome="Rex" especie="Gato" raca="SRD" url={imgCat2} />
          <CardPet nome="Tanatos" especie="Gato" raca="Sphynx" url={imgCat3} />
          <CardPet nome="Toby" especie="Gato" raca="SRD" url={imgCat4} />
          <CardPet nome="Peludinho" especie="Gato" raca="Siames" url={imgCat1} />
          <CardPet nome="Rex" especie="Gato" raca="SRD" url={imgCat2} />
          <CardPet nome="Tanatos" especie="Gato" raca="Sphynx" url={imgCat3} />
          <CardPet nome="Toby" especie="Gato" raca="SRD" url={imgCat4} />
          <CardPet nome="Peludinho" especie="Gato" raca="Siames" url={imgCat1} />
          <CardPet nome="Rex" especie="Gato" raca="SRD" url={imgCat2} />
          <CardPet nome="Tanatos" especie="Gato" raca="Sphynx" url={imgCat3} />
          <CardPet nome="Toby" especie="Gato" raca="SRD" url={imgCat4} />
        </CarrouselItem>

        <TitleSection title="Ongs" />
        <CarrouselItem>
          {CardOngs_DATA.map((card, index) => (
            <CardOngsHome
              key={index}
              url={card.foto}
              endereco={card.localizacao}
              nome={card.nome}
            />
          ))}
          
        </CarrouselItem>
      </div>
      <Footer />
    </>
  );
};

export default Home;
