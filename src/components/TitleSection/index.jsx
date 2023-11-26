import style from './style.module.css'

const TitleSection = (props) => {
    return (
      <div>
        <h2 className={`mt-5 mb-0 font-weight-bold ${style.title}`}>{props.title}</h2>
      </div>
    );
}

export default TitleSection