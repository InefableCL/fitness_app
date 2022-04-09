import style from '../modalContent.module.scss';
import ModalButton from "../../modalButton/ModalButton";

const NumberConfirmation = ({ handlerSubmit, isLink, path }) => {
    return (
        <>
            <h2 className={style.modalContent__title}>Подтверждение номера</h2>
            <form onSubmit={handlerSubmit} className={style.modalContent__form}>
                <label className={style.modalContent__label} htmlFor="modalInp">Введите код доступа:
                    <input className={style.modalContent__inp} id="modalInp" name="" type="password" placeholder="******" />
                </label>
                <ModalButton nameBtn={"Ввод"} isLink={isLink} path={path} />
            </form>
        </>
    );
};

export default NumberConfirmation;
