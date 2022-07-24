import React from "react"
import s from "./navbar.module.scss"
import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return(
        <div className={s.container}>
            <div className={s.navbar}>
                <img src="./img/logo.png" alt="logotype"/>
                <div className={s.links}>
                    <NavLink to={"/"} className={s.links__item}>Главная</NavLink>
                    <NavLink to={"/feedback"} className={s.links__item}>Отзывы</NavLink>
                    <NavLink to={"/faq"} className={s.links__item}>FAQ</NavLink>
                    <NavLink to={"/guarantees"} className={s.links__item}>Гарантии</NavLink>
                    <NavLink to={"/support"} className={s.links__item}>Поддержка</NavLink>
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