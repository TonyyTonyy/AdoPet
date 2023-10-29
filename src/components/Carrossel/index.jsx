import styles from './style.module.css'
import banner1 from '../../assets/Banner-1.png'
import banner2 from '../../assets/Banner-2.png'
import banner3 from '../../assets/Banner-3.png'


const Carrosel = () => {
  return (
    <>
      <div
        id="carouselExampleInterval"
        className={`carousel slide ${styles.banner_main}`}
        data-bs-ride="carousel"
      >
        <div className={`carousel-inner ${styles.banner_box}`}>
          <div className={`carousel-item active ${styles.banner}`} data-bs-interval="5000">
            <img src={banner1} className="d-block w-100" alt="..." />
          </div>
          <div className={`carousel-item ${styles.banner}`} data-bs-interval="5000">
            <img src={banner2} className="d-block w-100" alt="..." />
          </div>
          <div className={`carousel-item ${styles.banner}`} data-bs-interval="5000">
            <img src={banner3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Proximo</span>
        </button>
      </div>
    </>
  );
};
export default Carrosel;
