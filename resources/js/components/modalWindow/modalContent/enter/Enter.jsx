import style from '../modalContent.module.scss';
import ModalButton from "../../modalButton/ModalButton";
import EnterBtnsBottom from "../../EnterBtnsBottom/EnterBtnsBottom";

const Enter = ({ errorLogin, handlerSubmit, phone, setPhone, password, setPassword, isLink, path, setCurrentModalWindow }) => {
    return (
        <>
            <h2 className={`${style.modalContent__title} ${errorLogin ? style.modalContent__title_red : ''} `}>{errorLogin ? errorLogin: 'Вход'}</h2>
            <form onSubmit={handlerSubmit} className={style.modalContent__form}>
                <label className={style.modalContent__label} htmlFor="modalInp">Телефон:
                    <input className={style.modalContent__inp} id="modalInp" name="telNo" type="tel" minLength="10" maxLength="11" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="8-(999)-999-99-99" required />
                </label>
                <label className={style.modalContent__label} htmlFor="modalInp">Пароль:
                    <input className={style.modalContent__inp} id="modalInp" name="" type="password" minLength="6" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="******" required />
                </label>
                <ModalButton nameBtn={"Войти"} isLink={isLink} path={path} />
            </form>
            <EnterBtnsBottom setCurrentModalWindow={setCurrentModalWindow} />
        </>
    );
};

export default Enter;
