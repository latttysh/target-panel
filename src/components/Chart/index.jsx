import './Chart.scss';

import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import CircleChart from '../CircleChart';
import { Chart as Chart } from 'chart.js/auto';

const Charts = () => {
  const onClick = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="chart">
      <div className="title-block">
        <div className="title-block__title">Активность</div>
        <FormControl onChange={onClick}>
          <NativeSelect
            defaultValue={'today'}
            inputProps={{
              name: 'time',
              id: 'uncontrolled-native',
            }}>
            <option value={'today'}>За сегодня</option>
            <option value={'month'}>За месяц</option>
            <option value={'year'}>За год</option>
          </NativeSelect>
        </FormControl>
      </div>
      <CircleChart />
    </div>
  );
};

export default Charts;
