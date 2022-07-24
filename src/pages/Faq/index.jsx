import React from 'react';
import s from "./faq.module.scss"
import Accordion from "../../components/Accordion";

const Faq = () => {
    const accordionData = [
        {
            title: 'Как определяется стоимость кристаллов и предметов?',
            content: `Стоимость предмета определяется согласно игровому магазину, иногда возможно небольшое отличие в цене. Если у товара (например, кейсы персонажей) нет точной цены, тогда мы ставим её на своё усмотрение)`
        },
        {
            title: 'Section 2',
            content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`
        },
        {
            title: 'Section 3',
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
        }
    ];
    return (
        <div className={s.container}>
            <div className={s.title}>Частые вопросы</div>
            <div className={s.subtitle}>Ответы на часто задаваемые вопросы наших пользователей. Не нашли ответ на свой вопрос? — Обратитесь в поддержку.</div>
            {accordionData.map(({ title, content }, i) => (
                <Accordion title={title} content={content} key={i}/>
            ))}
        </div>
    );
};

export default Faq;
