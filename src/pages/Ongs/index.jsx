import Navbar from "../../components/Navbar"
import CardOngs from "../../components/CardOngs"
import CardOngs_DATA from "../../constants/constants"

import style from "./style.module.css"
const Ongs = () => {
    return (
        <div className={`d-flex flex-column `}>
        <Navbar isLogged="false" />
        <div className={style.cards}>
                {CardOngs_DATA.map((card, index) => (
                    <CardOngs
                        key={index}
                        foto={card.foto}
                        localizacao={card.localizacao}
                        nome={card.nome}
                    />
                ))}
            </div>
        </div>
    )
}
export default Ongs