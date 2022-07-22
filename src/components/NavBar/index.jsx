import React from "react"
import s from "./navbar.module.scss"

export const NavBar = () => {
    return(
        <div className={s.container}>
            <div className={s.navbar}>
                <img src="./img/logo.png" alt="logotype"/>
                <div className={s.links}>
                    <div className={s.links__item}>Главная</div>
                    <div className={s.links__item}>Отзывы</div>
                    <div className={s.links__item}>FAQ</div>
                    <div className={s.links__item}>Гарантии</div>
                    <div className={s.links__item}>Поддержка</div>
                </div>
                <div className={s.contact}>
                    <span>Связь с нами:</span>
                    <img src="./img/discord.png" alt="discord"/>
                    <img src="./img/telegram.png" alt="discord"/>
                </div>
            </div>
        </div>
    )
}