import style from './survey.module.scss';
import '../../styles/style.scss'
import { useState } from "react";
import Footer from '../footer/Footer';

const Survey = () => {
    const [age, setAge] = useState('18');
    const [weight, setWeight] = useState('65');
    const [height, setHeight] = useState('180');
    const [targetWeight, setTargetWeight] = useState('60');
    const [howDays, setHowDays] = useState('30');

    const [checked, setChecked] = useState(false);

    const handleChangeCheckbox = () => {
        setChecked(checked ? true : !checked);
    };

    return (
        <div className={style.survey}>
            <form className={style.survey__form} action="">
                <div className={style.survey__top}>
                    <div className={style.survey__wrap}>
                        <div className={style.survey__wrap_block}>
                            <h2 className={style.survey__title}>Персональные данные</h2>
                            <div className={style.survey__wrap1}>
                                <div className={style.survey__subtitle}>
                                    <h3>Ваше имя:</h3>
                                </div>
                                <div className={style.survey__item}>
                                    <input className={style.survey__inp} type="text" placeholder="Имя" />
                                </div>
                            </div>
                            <div className={style.survey__wrap1}>
                                <div className={style.survey__subtitle}>
                                    <h3>Ваша фамилия:</h3>
                                </div>
                                <div className={style.survey__item}>
                                    <input className={style.survey__inp} type="text" placeholder="Фамилия" />
                                </div>
                            </div>
                            <div className={style.survey__wrap1}>
                                <div className={style.survey__subtitle}>
                                    <h3>Ваша возраст:</h3>
                                </div>
                                <div className={style.survey__item}>
                                    <div className={style.range}>
                                        <span className={`${style.range__span} ${style.range__spanMin}`}>14</span>
                                        <input className={`${style.survey__inpRange} ${style.survey__inpRange_white}`} type="range" id="volumeAge" name="volAge" min="14" max="99" value={age} step="1" onChange={event => setAge(event.target.value)} />
                                        <span className={`${style.range__span} ${style.range__spanMax}`}>99</span>
                                    </div>
                                    <span className={style.span__range}>{age}</span>
                                </div>
                            </div>
                            <div className={style.survey__wrap1}>
                                <div className={style.survey__subtitle}>
                                    <h3>Ваш пол:</h3>
                                </div>
                                <div className={[style.survey__item, style.survey__item_gender].join(' ')}>
                                    <label className={style.survey__gender} htmlFor="gender1">
                                        <input type="radio" id="gender1" name="survey-gender" />
                                        <span>М</span>
                                    </label>
                                    <label className={style.survey__gender} htmlFor="gender2">
                                        <input type="radio" id="gender2" name="survey-gender" />
                                        <span>Ж</span>
                                    </label>
                                </div>
                            </div>
                            <div className={style.survey__wrap1}>
                                <div className={style.survey__subtitle}>
                                    <h3>Ваша вес:</h3>
                                </div>
                                <div className={style.survey__item}>
                                    <div className={style.range}>
                                        <span className={`${style.range__span} ${style.range__spanMin}`}>40</span>
                                        <input className={`${style.survey__inpRange} ${style.survey__inpRange_white}`} type="range" id="volumeWeight" name="volWeight" min="40" max="140" value={weight} step="1" onChange={event => setWeight(event.target.value)} />
                                        <span className={`${style.range__span} ${style.range__spanMax}`}>140</span>
                                    </div>
                                    <span className={style.span__range}>{weight}</span>
                                </div>
                            </div>
                            <div className={style.survey__wrap1}>
                                <div className={style.survey__subtitle}>
                                    <h3>Ваша рост:</h3>
                                </div>
                                <div className={style.survey__item}>
                                    <div className={style.range}>
                                        <span className={`${style.range__span} ${style.range__spanMin}`}>100</span>
                                        <input className={`${style.survey__inpRange} ${style.survey__inpRange_white}`} type="range" id="volumeHeight" name="volHeight" min="100" max="210" value={height} step="1" onChange={event => setHeight(event.target.value)} />
                                        <span className={`${style.range__span} ${style.range__spanMax}`}>210</span>
                                    </div>
                                    <span className={style.span__range}>{height}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.survey__center}>
                    <div className={style.survey__wrap}>
                        <div className={style.survey__wrap_block}>
                            <div className={style.survey__wrap1}>
                                <div className={style.survey__subtitle}>
                                    <h3>Ваша Цель:</h3>
                                </div>
                                <div className={style.survey__item}>
                                    <label className={style.radio} htmlFor="aim1">
                                        <input class={style.radio__input} type="radio" id="aim1" name="aim" onClick={() => (setChecked(false))} />
                                        <span class={`${style.radio__box} ${style.radio__box_black}`}></span>
                                        Потеря веса
                                    </label>
                                    <label className={style.radio} htmlFor="aim2">
                                        <input class={style.radio__input} type="radio" id="aim2" name="aim" onClick={handleChangeCheckbox} />
                                        <span class={`${style.radio__box} ${style.radio__box_black}`}></span>
                                        Сохранение моего нынешнего веса
                                    </label>
                                    <label className={style.radio} htmlFor="aim3">
                                        <input class={style.radio__input} type="radio" id="aim3" name="aim" onClick={() => (setChecked(false))} />
                                        <span class={`${style.radio__box} ${style.radio__box_black}`}></span>
                                        Увеличение веса
                                    </label>
                                </div>
                            </div>
                            <div className={`${style.survey__wrap1} ${checked ? style.block__disabled : ''}`}>
                                <div className={style.survey__subtitle}>
                                    <h3>Желаемый<br /> Вес:</h3>
                                </div>
                                <div className={style.survey__item}>
                                    <div className={style.range}>
                                        <span className={`${style.range__span} ${style.range__spanMin} ${style.range__span_black}`}>40</span>
                                        <input className={`${style.survey__inpRange} ${style.survey__inpRange_black}`} type="range" id="wantWeight" name="weight" min="40" max="140" value={targetWeight} step="1" onChange={event => setTargetWeight(event.target.value)} />
                                        <span className={`${style.range__span} ${style.range__spanMax} ${style.range__span_black}`}>140</span>
                                    </div>
                                    <span className={style.span__range}>{targetWeight}</span>
                                </div>
                            </div>
                            <div className={`${style.survey__wrap1} ${checked ? style.block__disabled : ''}`}>
                                <div className={style.survey__subtitle}>
                                    <h3>Период<br /> тренировок<br /> (дней):</h3>
                                </div>
                                <div className={style.survey__item}>
                                    <div className={style.range}>
                                        <span className={`${style.range__span} ${style.range__spanMin} ${style.range__span_black}`}>21</span>
                                        <input className={`${style.survey__inpRange} ${style.survey__inpRange_black}`} type="range" id="countDays" name="days" min="21" max="365" value={howDays} step="1" onChange={event => setHowDays(event.target.value)} />
                                        <span className={`${style.range__span} ${style.range__spanMax} ${style.range__span_black}`}>365</span>
                                    </div>
                                    <span className={style.span__range}>{howDays}</span>
                                </div>
                            </div>
                            <div className={style.survey__wrap1}>
                                <div className={style.survey__subtitle}>
                                    <h3 >Ваш Уровень<br /> Активности:</h3>
                                </div>
                                <div className={style.survey__item}>
                                    <label className={style.radio} htmlFor="active1">
                                        <input class={style.radio__input} type="radio" id="active1" name="active" />
                                        <span class={`${style.radio__box} ${style.radio__box_black}`}></span>
                                        Сидячий
                                        <p>Виды повседневной деятельности, требующие минимальных усилий, таких как отдых, сидение за рабочим столом или за рулем</p>
                                    </label>
                                    <label className={style.radio} htmlFor="active2">
                                        <input class={style.radio__input} type="radio" id="active2" name="active" />
                                        <span class={`${style.radio__box} ${style.radio__box_black}`}></span>
                                        Малоактивный
                                        <p>Виды повседневной деятельности, требующие некоторых усилий, таких как временное пребывание в стоячем положении, работа по дому или несложные упражнения</p>
                                    </label>
                                    <label className={style.radio} htmlFor="active3">
                                        <input class={style.radio__input} type="radio" id="active3" name="active" />
                                        <span class={`${style.radio__box} ${style.radio__box_black}`}></span>
                                        Активный
                                        <p>Виды повседневной деятельности, трребующие небольших усилий, таких как стояние, физическая рработа или регулярные умеренные физические нагрузки</p>
                                    </label>
                                    <label className={style.radio} htmlFor="active4">
                                        <input class={style.radio__input} type="radio" id="active4" name="active" />
                                        <span class={`${style.radio__box} ${style.radio__box_black}`}></span>
                                        Очень Активный
                                        <p>Виды повседневной деятельности, требующие интенсивных физических усилий, таких как строительные работы или регулярные энергичные упражнения</p>
                                    </label>
                                </div>
                            </div>
                            <div className={style.survey__wrap1}>
                                <div className={style.survey__subtitle}>
                                    <h3>Продолжитель&shy;ность сна:</h3>
                                </div>
                                <div className={style.survey__item}>
                                    <label className={style.radio} htmlFor="sleep1">
                                        <input class={style.radio__input} type="radio" id="sleep1" name="sleep" value="" />
                                        <span class={`${style.radio__box} ${style.radio__box_black}`}></span>
                                        менее 6 часов
                                    </label>
                                    <label className={style.radio} htmlFor="sleep2">
                                        <input class={style.radio__input} type="radio" id="sleep2" name="sleep" value="" />
                                        <span class={`${style.radio__box} ${style.radio__box_black}`}></span>
                                        6-8 часов
                                    </label>
                                    <label className={style.radio} htmlFor="sleep3">
                                        <input class={style.radio__input} type="radio" id="sleep3" name="sleep" value="" />
                                        <span class={`${style.radio__box} ${style.radio__box_black}`}></span>
                                        более 8 часов
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.survey__bottom}>
                    <div className={style.survey__wrap}>
                        <div className={style.survey__wrap_block}>
                            <div className={style.survey__wrap1}>
                                <div className={style.survey__subtitle}>
                                    <h3>Питание:</h3>
                                </div>
                                <div className={style.survey__item}>
                                    <label className={style.check} htmlFor="food1">
                                        <input className={style.check__input} type="checkbox" id="food1" name="food1" />
                                        <span className={style.check__box}></span>
                                        Кушаю на ночь
                                    </label>
                                    <label className={style.check} htmlFor="food2">
                                        <input className={style.check__input} type="checkbox" id="food2" name="food2" />
                                        <span className={style.check__box}></span>
                                        Пью газировку, кофе, соки ...
                                    </label>
                                    <label className={style.check} htmlFor="food3">
                                        <input className={style.check__input} type="checkbox" id="food3" name="food3" />
                                        <span className={style.check__box}></span>
                                        Кушаю много сладкого
                                    </label>
                                    <label className={style.check} htmlFor="food4">
                                        <input className={style.check__input} type="checkbox" id="food4" name="food4" />
                                        <span className={style.check__box}></span>
                                        Кушаю много соленого
                                    </label>
                                    <label className={style.check} htmlFor="food5">
                                        <input className={style.check__input} type="checkbox" id="food5" name="food5" />
                                        <span className={style.check__box}></span>
                                        Кушаю фастфуд/жирную пищу
                                    </label>
                                    <label className={style.check} htmlFor="food6">
                                        <input className={style.check__input} type="checkbox" id="food6" name="food6" />
                                        <span className={style.check__box}></span>
                                        Стараюсь придерживаться ПП
                                    </label>
                                    <label className={style.check} htmlFor="food7">
                                        <input className={style.check__input} type="checkbox" id="food7" name="food7" />
                                        <span className={style.check__box}></span>
                                        Правильно питаюсь
                                    </label>
                                </div>
                            </div>
                            <div className={style.survey__wrap1}>
                                <div className={style.survey__subtitle}>
                                    <h3>Потребление<br /> воды в день:</h3>
                                </div>
                                <div className={style.survey__item}>
                                    <label className={style.radio} htmlFor="water1">
                                        <input class={style.radio__input} type="radio" id="water1" name="survey-water" value="" />
                                        <span class={[style.radio__box, style.radio__box_white].join(' ')}></span>
                                        до 0,5 л
                                    </label>
                                    <label className={style.radio} htmlFor="water2">
                                        <input class={style.radio__input} type="radio" id="water2" name="survey-water" value="" />
                                        <span class={`${style.radio__box} ${style.radio__box_white}`}></span>
                                        0,5 - 1,5 л
                                    </label>
                                    <label className={style.radio} htmlFor="water3">
                                        <input class={style.radio__input} type="radio" id="water3" name="survey-water" value="" />
                                        <span class={`${style.radio__box} ${style.radio__box_white}`}></span>
                                        более 1,5 л
                                    </label>
                                    <label className={style.radio} htmlFor="water4">
                                        <input class={style.radio__input} type="radio" id="water4" name="survey-water" value="" />
                                        <span class={`${style.radio__box} ${style.radio__box_white}`}></span>
                                        Не пью воду
                                    </label>
                                </div>
                            </div>
                            <bottom className={style.survey__btn} type="submit">Сохранить Данные</bottom>
                        </div>
                    </div>
                </div>
            </form>
            <Footer />
        </div>
    );
};

export default Survey;
