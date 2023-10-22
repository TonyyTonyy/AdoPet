import style from './style.module.css'
import ButtonRound from '../ButtonRound'

const CardOngs = (props) => {
    return (
        <div className={style.card}>
            <h6>{props.foto}</h6>
            <h3>{props.nome}</h3>
            <h1>{props.localizacao}</h1>
            <a>
                <ButtonRound nome="Ver mais"/>
            </a>
        </div>
    )
}
export default CardOngs;