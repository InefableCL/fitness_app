import { useState } from 'react'
import { useSelector } from 'react-redux'
import style from './style.module.scss'

export default ({ imageSrc }) => {
    const [userData, setuserData] = useState((useSelector((state) => (state.userData))))

    const [generalInfoInputs, setGeneralInfoInputs] = useState([
        { labelText: 'Логин:', inputId: 'user__login', inputType: 'text', defaultValue: `${userData.userLogin}` },
        { labelText: 'Пароль:', inputId: 'user__password', inputType: 'password', defaultValue: `${userData.userPassword}` },
        { labelText: 'Email:', inputId: 'user__email', inputType: 'email', defaultValue: `${userData.userEmail}` },
        { labelText: 'Телефон:', inputId: 'user__phone-number', inputType: 'text', defaultValue: `${userData.userPhoneNumber}` }
    ])

    const editGeneralInfo = (e) => {
        e.preventDefault();
        console.log('Edit general info')
    }

    return (
        <div className={style['account-wrapper']}>
            <div className={style['user-info']}>
                <div className={style['user__image-wrapper']}>
                    {imageSrc && <img
                        className={style.user__image}
                        src={imageSrc}
                        alt="фото пользователя" />}
                    <button className={style['user__image-edit-btn']}>Редактировать фото</button>
                </div>
                <form className={style.user__form}>
                    <h3 className={style['user-name']}>{userData.userSurname} {userData.userName}, {userData.userAge}</h3>
                    {generalInfoInputs.map((item) => (
                        <div className={style['user__input-wrapper']} key={item.inputId}>
                            <label className={style['user__input-label']} for={item.inputId}>{item.labelText}</label>
                            <input className={style['user__input-field']} type={item.inputType} id={item.inputId} defaultValue={item.defaultValue}></input>
                        </div>
                    ))}
                    <button
                        className={`button ${style['user__form-submit-btn']}`}
                        type="submit"
                        onClick={editGeneralInfo}>
                        Редактировать данные
                    </button>
                </form>
            </div>
        </div >

    )
}
