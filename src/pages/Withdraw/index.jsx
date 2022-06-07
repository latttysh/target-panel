import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import NavBar from '../../components/NavBar';
import SubHeader from '../../components/SubHeader';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Withdraw.scss';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <NavBar />
      <SubHeader title={'Вывод денег'} />
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab style={{ color: 'white' }} label="Номер телефона" value="1" />
              <Tab style={{ color: 'white' }} label="Qiwi" value="2" />
              <Tab style={{ color: 'white' }} label="Банковская карта" value="3" />
              <Tab style={{ color: 'white' }} label="Яндекс деньги" value="4" />
              <Tab style={{ color: 'white' }} label="Webmoney" value="5" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <div className="withdraw-block">
              <TextField
                id="standard-basic"
                label="Введите ваш номер телефона"
                variant="standard"
                style={{ marginBottom: 20, width: '300px' }}
              />
              <TextField
                id="standard-basic"
                label="Введите сумму"
                variant="standard"
                style={{ marginBottom: 20, width: '300px' }}
              />
              <Button variant="outlined">Вывести</Button>
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div className="withdraw-block">
              <TextField
                id="standard-basic"
                label="Введите ваш QIWI"
                variant="standard"
                style={{ marginBottom: 20, width: '300px' }}
              />
              <TextField
                id="standard-basic"
                label="Введите сумму"
                variant="standard"
                style={{ marginBottom: 20, width: '300px' }}
              />
              <Button variant="outlined">Вывести</Button>
            </div>
          </TabPanel>
          <TabPanel value="3">
            <div className="withdraw-block">
              <TextField
                id="standard-basic"
                label="Номер карты"
                variant="standard"
                style={{ marginBottom: 20, width: '300px' }}
              />
              <TextField
                id="standard-basic"
                label="Держатель карты"
                variant="standard"
                style={{ marginBottom: 20, width: '300px' }}
              />
              <TextField
                id="standard-basic"
                label="Карта действительна до"
                variant="standard"
                style={{ marginBottom: 20, width: '300px' }}
              />
              <TextField
                id="standard-basic"
                label="Введите сумму"
                variant="standard"
                style={{ marginBottom: 20, width: '300px' }}
              />
              <Button variant="outlined">Вывести</Button>
            </div>
          </TabPanel>
          <TabPanel value="4">
            <div className="withdraw-block">
              <TextField
                id="standard-basic"
                label="Введите ваш номер кошелька"
                variant="standard"
                style={{ marginBottom: 20, width: '300px' }}
              />
              <TextField
                id="standard-basic"
                label="Введите сумму"
                variant="standard"
                style={{ marginBottom: 20, width: '300px' }}
              />
              <Button variant="outlined">Вывести</Button>
            </div>
          </TabPanel>
          <TabPanel value="5">
            <div className="withdraw-block">
              <TextField
                id="standard-basic"
                label="Введите ваш номер кошелька"
                variant="standard"
                style={{ marginBottom: 20, width: '300px' }}
              />
              <TextField
                id="standard-basic"
                label="Введите сумму"
                variant="standard"
                style={{ marginBottom: 20, width: '300px' }}
              />
              <Button variant="outlined">Вывести</Button>
            </div>
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
