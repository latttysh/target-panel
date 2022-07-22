import s from "./home.module.scss"
import {StatsBlock} from "../../components/StatsBlock/StatsBlock";
import {ProductBlock} from "../../components/ProductBlock"

const Home = () => {
  return (
    <div className="home">
        <div className={s.container}>
            <div className={s.blocks}>
                <StatsBlock title={"Пользователей"} count={"63 746"}/>
                <StatsBlock title={"Отзывов"} count={"971"}/>
                <StatsBlock title={"Открытий"} count={"815 041"}/>
                <StatsBlock title={"Покупок"} count={"2 809"}/>
                <StatsBlock title={"Выведено кристаллов"} count={"2 895 980"}/>
            </div>
            <div className={s.products}>
                <div className={s.title}>
                    <img src="./img/arrow-right.png" alt="arrow-right"/>
                    <span>Экономьте свои деньги с донатов</span>
                    <img src="./img/arrow-left.png" alt="arrow-left"/>
                </div>
                <div className={s.products__block}>
                    <ProductBlock count={"6 480"} title={"Кристаллы"} price={"4 500"}/>
                    <ProductBlock count={"3 280"} title={"Кристаллы"} price={"2 200₽"}/>
                    <ProductBlock count={"1 980"} title={"Кристаллы"} price={"1 300₽"}/>
                    <ProductBlock count={"980"} title={"Кристаллы"} price={"750₽"}/>
                    <ProductBlock count={"300"} title={"Кристаллы"} price={"300₽"}/>
                    <ProductBlock count={"1 шт"} title={"Благословение полной луны"} price={"299₽"}/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Home;
