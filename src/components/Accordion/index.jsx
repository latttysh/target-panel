import React from 'react';
import s from "./accordion.module.scss"

const Accordion = ({title, content}) => {
    const [isActive, setIsActive] = React.useState(false);
    return (
        <div className={s.accordion__item}>
            <div className={s.accordion__title} onClick={() => setIsActive(!isActive)}>
                <div className={s.title}>{title}</div>
                <div>{isActive ? '-' : '+'}</div>
            </div>
            {isActive ? <div className={s.accordion__content__active}>{content}</div> : <div className={s.accordion__content}>{content}</div>}
        </div>
    );
};

export default Accordion;
