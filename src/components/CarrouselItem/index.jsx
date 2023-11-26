import style from "./style.module.css";

const CarrouselItem = (props) => {
    return (
        <div className={`d-flex ${style.CarrouselItem}`}>
            {props.children}
        </div>
    )
};

export default CarrouselItem;
