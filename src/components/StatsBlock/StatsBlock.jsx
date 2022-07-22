import React from "react"
import s from "./statsblock.module.scss"

export const StatsBlock = ({title, count}) => {
    return(
        <div className={s.block}>
            <div className={s.counter}>{count}</div>
            <img src="./img/line.png" alt="line"/>
            <div className={s.title}>{title}</div>
        </div>
    )
}