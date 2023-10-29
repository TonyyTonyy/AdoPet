import styles from './style.module.css'

const SessionPet = (props) => {
return(
    <>
    <div className={`container d-flex align-items-center justify-content-center  ${styles.session_main}`}>
        <div className={`row gap-5 text-center`}>
             <div className={`col-5 d-flex align-items-center`}>
                    <h1 className={`${styles.h1}`}>{props.animal}</h1>
                </div>
                <div className={`col-5 ${styles.image_box}`}>
                    <img src={props.img} className='' />
                </div>
            </div>

        </div>
    </>

)
}
export default SessionPet;