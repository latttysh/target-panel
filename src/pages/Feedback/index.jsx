import s from "./feedback.module.scss"

const Feedback = () => {
    return (
        <div className={s.container}>
            <div className={s.title}>
                Отзывы
            </div>
            <div className={s.subtitle}>
                Отзывы о Genshin Donate. Что выпадало людям, и как в целом обстоят дела с сайтом.
            </div>
            <div className={s.stats}>
                <div className={s.info}>
                    <div className={s.stats__title}>Соотношение положительных и негативных отзывов</div>
                    <div className={s.count}>Всего 8 отзывов</div>
                </div>
                <div className={s.stats__line}></div>
            </div>
            <div className={s.feedback__block}>
                <div className={s.feedback__form}>
                    <form>
                        <label>Оставить отзыв</label>
                        <input type="text" placeholder={"Ваше имя или никнейм"}/>
                        <textarea/>
                        <button type={"button"}>Оставить отзыв</button>
                    </form>
                </div>
                <div className={s.feeback__items}></div>
            </div>
        </div>
    );
};

export default Feedback;
