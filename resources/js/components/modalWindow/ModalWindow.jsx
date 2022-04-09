import style from './modalWindow.module.scss';
import ModalContent from "./modalContent/ModalContent";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
// import { useNavigate } from "react-router-dom";
import {fetchUser} from "../../actions/userAction";

const ModalWindow = ({ visible, onCloseWindow, onOpenWindow }) => {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [errorFlg, setErrorFlg] = useState(false);
    const [isLink, setIsLink] = useState(false);
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    //
    const { error, user } = useSelector((state) => state.user);

    useEffect(() => {
        if (error) {
            setPhone("");
            setPassword("");
            setErrorFlg((prevState) => !prevState);
        }
    }, [error]);

    // useEffect(() => {
    //     if (user) {
    //         return <navigate to="/account"/>
    //     }
    // }, [user]);

    const handlerSubmit = (e) => {
        console.log('форма отправлена');
        e.preventDefault();
        setErrorFlg(false);
        dispatch(fetchUser({ phone, password }));
    };

    const [isFlag, setIsFlag] = useState(false);

    // создаем обработчик нажатия клавиши Esc
    const onKeydown = () => {
        switch (key) {
            case 'Escape':
                onCloseWindow();
                break;
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', onKeydown);
        return () => document.removeEventListener('keydown', onKeydown);
    });

    if (!visible) return null

    return (
        <div className='modal' onClick={onCloseWindow}>
            <div className='modal__dialog' onClick={e => e.stopPropagation()}>
                <ModalContent errorLogin={error} handlerSubmit={handlerSubmit} phone={phone} setPhone={setPhone} password={password} setPassword={setPassword}/>
            </div>
        </div>
    );
};

export default ModalWindow;
