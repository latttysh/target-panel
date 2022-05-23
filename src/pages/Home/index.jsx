import './Home.scss';
import SubHeader from '../../components/SubHeader';
import NavBar from '../../components/NavBar';
import StatWidget from '../../components/StatWidget';
import Chart from '../../components/Chart';
import Table from '../../components/Table';

const Home = () => {
  return (
    <div className="home">
      <div className="homeContainer">
        <NavBar />
        <SubHeader />

        <div className="content">
          <StatWidget title={'Заявки'} today={12} yestarday={35} month={265} bgcolor={'#007d73'} />
          <StatWidget title={'Заказы'} today={0} yestarday={0} month={727} bgcolor={'#0285cb'} />
          <StatWidget title={'Доходы'} today={0} yestarday={0} month={9000} bgcolor={'#451382'} />
        </div>
        <div className="charts">
          <Chart />
        </div>
        <Table
          col={[
            { field: 'date', headerName: 'Дата', width: 300 },
            { field: 'id', headerName: 'Номер заказа', width: 300 },
            { field: 'type', headerName: 'Тип работы', width: 300 },
            {
              field: 'price',
              headerName: 'Стоимость, руб',
              width: 300,
            },
            {
              field: 'status',
              headerName: 'Статус',
              width: 300,
            },
            {
              field: 'final',
              headerName: 'Вознаграждение, руб',
              width: 300,
            },
          ]}
          ro={[
            {
              date: '23 мая 2016',
              id: '526316',
              type: 'Научно исследовательская работа',
              price: 20000,
              status: 'В работе',
              final: '20 000р',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Home;
