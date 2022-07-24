import React from 'react';
import s from "./guaranteeblock.module.scss"

const GuaranteeBlock = ({number, title, text}) => {
    return (
        <div className={s.block}>
            <div className={s.number}>{number}</div>
            <div className={s.title}>{title}</div>
            <div className={s.text}>{text}
            </div>
        </div>
    );
};

export default GuaranteeBlock;
