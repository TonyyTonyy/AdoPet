import style from "./style.module.css"
import Logo from "../../assets/lupa.svg"

const FilterInput = (props) => {
    return (
        <div className={style.input}>
            <input type="text" placeholder={props.placeholder} />
            <img src={Logo} alt="pesquisar" />
        </div>
    )
}
export default FilterInput