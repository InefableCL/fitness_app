import style from './style.module.scss'
import '../../styles/style.scss'
import {useState} from "react";

export default () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    function submit(e) {
        e.preventDefault();
        console.log('submit')
    }

    return (
        <div className={style.box}>
            <form id="form-application"
                onSubmit={submit}
                className={style.form}>
                <p className={`${style.text} ${style['form-item']}`}>
                    <span className={style.big}>Оставь заявку</span> <br/>
                    и мы свяжемся с тобой для составления тренировки специально для
                    <span className={style.highlight}> тебя</span>!
                </p>
                <input
                    className={`edit ${style['form-item']}`}
                    type="text"
                    placeholder="Имя"
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}
                />
                <input
                    className={`edit ${style['form-item']}`}
                    type="text"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                />
                <button
                    className={`button ${style['form-item']}`}
                    type="submit">Отправить</button>
            </form>
        </div>
    )
}
