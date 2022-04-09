import style from './cardItem.module.scss';
const CardItem = ({item}) => {
    return (
        <div className={style.card__item}>
            <a target="_blank" href={item.link} key={item.id}>
                <img
                    src={require("../../images/carousel/" + item.backgroundImg)}
                    className={style.card__item__img}
                    alt=""
                />
                <h3 className={style.card__item__heading + " " + item.headingPosition}>{item.heading}</h3>
            </a>
        </div>
    )
}

export default CardItem;
