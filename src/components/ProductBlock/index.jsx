import React from "react"
import s from "./productblock.module.scss"

export const ProductBlock = ({title, price,count}) => {
    return(
        <div className={s.product}>
            <img src="./img/crystals.png" alt="crystals"/>
            <span className={s.count}>{count}</span>
            <span className={s.title}>{title}</span>
            <span className={s.price}>{price}</span>
            <button className={s.button}>Купить</button>
        </div>
    )
}