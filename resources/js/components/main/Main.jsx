import style from './main.module.scss';

const Main = (props) => {
    return (
         <div className={style.main}>
             <div className={style.main__wrap}>
                 <h1 className={ [style.main__title, style.title].join(' ') }>Создай лучшую версию себя </h1>
                 <div className={style.main__text_wrap}>
                    <p className={style.main__text}><a href="#form-application" className={style.main__link}><b>Оставь заявку</b></a> и мы разработаем план тренировок  для тебя</p>
                 </div>
             </div>
         </div>
    );
};

export default Main;