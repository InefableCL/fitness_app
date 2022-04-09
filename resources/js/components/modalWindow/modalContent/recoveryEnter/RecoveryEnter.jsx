import style from '../modalContent.module.scss';
import ModalButton from "../../modalButton/ModalButton";

const RecoveryEnter = ({ handlerSubmit, isLink, path, flag }) => {

    return (
        <>
            <h2 className={style.modalContent__title}>Восстановление пароля</h2>
            <form onSubmit={handlerSubmit} className={style.modalContent__form}>
                <label className={style.modalContent__label} htmlFor="modalInp">{flag ? 'Введите номер телефона:' : 'Введите код доступа:'}
                    <input className={style.modalContent__inp} id="modalInp" name="" type={flag ? 'tel' : 'password'} placeholder={flag ? '8-(999)-999-99-99' : '******'}/>
                </label>
                <ModalButton nameBtn={flag ? 'Получить код' : 'Ввод'} isLink={isLink} path={path} />
            </form>
        </>
    );
};

export default RecoveryEnter;
