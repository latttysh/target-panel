import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const Table = ({ col, ro }) => {
  return (
    <div style={{ height: 400, width: '100%', padding: '20px' }}>
      <DataGrid rows={ro} columns={col} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
    </div>
  );
};

export default Table;
