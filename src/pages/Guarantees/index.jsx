import React from 'react';
import s from "./guarantees.module.scss"
import GuaranteeBlock from "../../components/GuaranteeBlock";

const Guarantees = () => {
    return (
        <div className={s.container}>
            <div className={s.title}>Гарантии</div>
            <div className={s.items}>
                <GuaranteeBlock number={1} title={"Безопасность"} text={"Наш сайт и платежная система поддерживает безопасную передачу данных SSL, который позволяет быть уверенным, что ваши данные не попадут в плохие руки и будут надёжно защищены."}/>
                <GuaranteeBlock number={2} title={"Сертифицированная платёжная система"} text={"Наша платёжная система сертифицированна по всем стандартам, имеет персональные кошельки и вы всегда можете запросить возврат средств."}/>
                <GuaranteeBlock number={3} title={"Быстрые выводы примогем"} text={"Благодаря массовым платежам мы делаем выплаты в кратчайшие сроки."}/>
                <GuaranteeBlock number={4} title={"Отзывы наших покупателей"} text={"Вы всегда можете прочитать чужие отзывы или оставить свой на странице отзывов."}/>
                <GuaranteeBlock number={5} title={"Честность"} text={"На сайте прописаны шансы для предметов в равной степени, поэтому у вас не будет сомнений в настоящем рандоме."}/>
                <GuaranteeBlock number={6} title={"SSL сертификат"} text={"Да, наш сайт и платежная система имеет купленный SSL-сертфиикат, который позволяет быть уверенным, что ваши данные не попадут в плохие руки и будут надёжно защищены."}/>
            </div>
        </div>
    );
};

export default Guarantees;
