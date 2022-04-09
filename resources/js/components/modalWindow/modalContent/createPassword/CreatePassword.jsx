import style from "../modalContent.module.scss";
import ModalButton from "../../modalButton/ModalButton";

const CreatePassword = ({ handlerSubmit, isLink, path }) => {
    return (
        <>
            <h2 className={style.modalContent__title}>Создание пароля</h2>
            <form onSubmit={handlerSubmit} className={style.modalContent__form}>
                <label className={style.modalContent__label} htmlFor="modalInp">Пароль:
                    <input className={style.modalContent__inp} id="modalInp" name="" type="password" placeholder="******" />
                </label>
                <label className={style.modalContent__label} htmlFor="modalInp">Повторите пароль:
                    <input className={style.modalContent__inp} id="modalInp" name="" type="password" placeholder="******" />
                </label>
                <ModalButton nameBtn={"Сохранить пароль"} isLink={isLink} path={path} />
            </form>
        </>
    );
};

export default CreatePassword;
