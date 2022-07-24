import React from 'react';
import s from "./support.module.scss"

const Support = () => {
    return (
        <div className={s.container}>
            <div className={s.title}>Поддержка</div>
            <div className={s.subtitle}>Если у вас возникли проблемы с функционалом сайта,
                либо возникли какие-то дополнительные вопросы,
                поддержка поможет в любое время суток.</div>

            <div className={s.link__block}>
                <img src="./img/support.png" alt="support"/>
                <button>Открыть чат в Telegram</button>
            </div>
        </div>
    );
};

export default Support;
