import style from './EnterBtnsBottom.module.scss';

const EnterBtnsBottom = ({ setCurrentModalWindow }) => {
    return (
        <div className={style.modalBtnsBottom}>
            <button className={style.modalBtnsBottom__btn} onClick={() => setCurrentModalWindow(2)} >Забыли пароль?</button>
            <button className={style.modalBtnsBottom__btn} onClick={() => setCurrentModalWindow(5)} >Регистрация</button>
        </div>
    );
};

export default EnterBtnsBottom;
