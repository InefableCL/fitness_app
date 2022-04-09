import style from './modalButton.module.scss';
import {NavLink} from "react-router-dom";

const ModalButton = ({ nameBtn, isLink, path}) => {
    console.log('path', path)

    return (
        isLink
            ? <NavLink className={style.modalButton__btn} to={path} >Вход</NavLink>
            :
            <div className={style.modalButton}>
                <button type="submit" className={style.modalButton__btn} >{nameBtn}</button>
            </div>
    );
};

export default ModalButton;
