import React from 'react';
import NavBar from '../../components/NavBar';
import SubHeader from '../../components/SubHeader';
import Table from '../../components/Table';

const History = () => {
  return (
    <div className="history">
      <NavBar />
      <SubHeader />
      <Table
        col={[
          { field: 'id', headerName: 'Номер', width: 100 },
          { field: 'date', headerName: 'Дата', width: 300 },
          { field: 'sum', headerName: 'Сумма', width: 300 },
          { field: 'type', headerName: 'Тип', width: 300 },
          { field: 'descr', headerName: 'Описание', width: 300 },
        ]}
        ro={[
          {
            id: 1,
            date: '23 мая 2016',
            sum: '20 000',
            type: 'Вывод',
            descr: 'Вывод средств на какой то кошелёк???',
          },
        ]}
      />
    </div>
  );
};

export default History;
