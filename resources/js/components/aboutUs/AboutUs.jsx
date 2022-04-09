import style from './aboutUs.module.scss';

const AboutUs = (props) => {

    const mainReasonsList = ['Контроль лишнего веса','Энергия','Предотвращение заболеваний','Крепкий сон','Хорошее самочувствие','Хорошее настроение','Красивая кожа','Хорошая работа мозга','Снижение боли','Улучшение интимной жизни'];

    return (
        <div className={style.aboutUs}>
            <div className={style.aboutUs__wrap}>
                <h2 className={ [style.aboutUs__title, style.title].join(' ') }>О нас</h2>
                <div className={ [style.aboutUs__text_wrap, style.text__wrap].join(' ') }>
                    <div className={style.text__wrap_left}>
                        <p className={style.aboutUs__text}>Спорт помогает не только поддерживать физическую форму, а также существенно влияет на самочувствие и настроение. Некоторые люди начинают заниматься спортом и вскоре очень быстро бросают, другие же не могут отказаться от физических упражнений на протяжении всей жизни. Если вы все еще ленитесь лишний раз присесть или покачать пресс, тогда мы расскажем вам о 10 основных причинах, зачем нужно заниматься спортом:
                        </p>
                        <ul className={style.aboutUs__list}>
                            {mainReasonsList.map((reason, index) =>
                                <li className={ [style.aboutUs__item, style.aboutUs__text].join(' ') } key={index}>{index + 1}. {reason}</li>
                            )}
                        </ul>
                    </div>
                    <div className={style.text__wrap_right}>
                        <p className={style.aboutUs__text}>В последнее время здоровый образ жизни и регулярные занятия спортом стали модными, поэтому все больше людей стараются уделять физическим упражнениям время. Однако некоторые все также продолжают искать оправдания, чтобы не идти в спорт зал. Быть здоровым и подтянутым или страдать от боли и иметь дряблое тело — <b>выбор за вами!</b></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;