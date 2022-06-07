import React from 'react';
import NavBar from '../../components/NavBar';
import SubHeader from '../../components/SubHeader';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TextField from '@mui/material/TextField';
import Table from '../../components/Table';
import './promo.scss';
import { useForm } from 'react-hook-form';

function Promo() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className="promo">
      <NavBar />
      <SubHeader title={'Промоматериалы'} />
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab style={{ color: 'white', marginLeft: '10px' }} label="Баннеры" value="1" />
              <Tab style={{ color: 'white', marginRight: '20px' }} label="Формы" value="2" />
              <Tab style={{ color: 'white', marginRight: '20px' }} label="Лендинги" value="3" />
              <Tab style={{ color: 'white', marginRight: '20px' }} label="Метки" value="4" />
              <Tab style={{ color: 'white', marginRight: '20px' }} label="Postback" value="5" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <div className="block">Вкладка 1</div>
          </TabPanel>
          <TabPanel value="2">
            <div className="block">Вкладка 2</div>
          </TabPanel>
          <TabPanel value="3">
            <div className="block">Вкладка 3</div>
          </TabPanel>
          <TabPanel value="4">
            <div className="block">
              <div className="marcs">
                <TextField
                  id="outlined-basic"
                  label="Введите название"
                  variant="outlined"
                  style={{ width: '700px' }}
                />
                <button className="marcs-btn">Добавить</button>
              </div>
              <Table
                className="table"
                col={[
                  { field: 'id', headerName: 'id', width: 120 },
                  { field: 'title', headerName: 'Название', width: 350 },
                  {
                    field: 'url',
                    headerName: 'Ссылка',
                    width: 750,
                  },
                ]}
                ro={[
                  {
                    id: '1',
                    title: 'Метка номер 1',
                    url: 'тут будет очень длинная ссылка воооооот такая длинная',
                  },
                ]}
              />
              <div className="text">
                <div className="text-title">Метки для каналов</div>
                <div className="text-descr">
                  Рекомендуем использовать метки для разделения каналов трафика в статистике.
                  Например, вы привлекаете трафик с помощью Директа и сетки сайтов. Добавьте метки:
                  директ и сайты. В ссылке, идентификатор метки — ?partnerid=[id]
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="5">
            <div className="block">
              <TextField
                id="outlined-basic"
                label="Вставьте ссылку, сгенерированную вашей TDS системой"
                variant="outlined"
                style={{ width: '700px' }}
              />
              <hr style={{ marginTop: '20px' }} />
              <div className="content">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="request">
                    <div className="request-title">Когда отправлять запрос?</div>
                    <div className="request-checkboxes">
                      <input type="checkbox" placeholder="Check1" {...register('Check1', {})} />
                    </div>
                    <div className="request-title">Метод</div>
                    <select {...register('method')}>
                      <option value="post">POST</option>
                      <option value="get">GET</option>
                    </select>
                    <button type="submit">сохранить</button>
                  </div>
                </form>
                <div className="settings"></div>
              </div>
            </div>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default Promo;
