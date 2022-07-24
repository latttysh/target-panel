import React from "react"
import s from "./feedbackblock.module.scss"

export const FeedbackBlock = ({color, name, time, text}) => {
    return(
        <div className={s.block} style={{borderLeft: "15px solid green"}}>
            <div className={s.info}>
                <div className={s.name}>Антон Геншин</div>
                <div className={s.time}>21/07/2022 12:00</div>
            </div>
            <div className={s.text}>Отличный сайт. Всё быстро и без обмана!</div>
        </div>
    )
}