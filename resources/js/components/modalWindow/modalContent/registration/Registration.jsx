import style from "../modalContent.module.scss";
import ModalButton from "../../modalButton/ModalButton";

const Registration = ({ handlerSubmit, isLink, path }) => {
    return (
        <>
            <h2 className={style.modalContent__title}>Регистрация</h2>
            <form onSubmit={handlerSubmit} className={style.modalContent__form}>
                <label className={style.modalContent__label} htmlFor="modalInp">Введите ваше Имя:
                    <input className={style.modalContent__inp} id="modalInp" name="" type="text" placeholder="Имя" />
                </label>
                <label className={style.modalContent__label} htmlFor="modalInp">Введите номер телефона:
                    <input className={style.modalContent__inp} id="modalInp" name="" type="tel" placeholder="8-(999)-999-99-99" />
                </label>
                <ModalButton nameBtn={"Получить код"} isLink={isLink} path={path} />
            </form>
        </>
    );
};

export default Registration;
