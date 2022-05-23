import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const Table = ({ col, ro }) => {
  const columns = [
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
  ];

  const rows = [
    {
      date: '23 мая 2016',
      id: '526316',
      type: 'Научно исследовательская работа',
      price: 20000,
      status: 'В работе',
      final: '20 000р',
    },
  ];
  return (
    <div style={{ height: 400, width: '90%', padding: '20px' }}>
      <DataGrid rows={ro} columns={col} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
    </div>
  );
};

export default Table;
