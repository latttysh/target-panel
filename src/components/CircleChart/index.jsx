import React from 'react';
import { Line } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import './CircleChart.scss';

const CircleChart = () => {
  return (
    <div className="charts">
      <div className="line">
        <Line
          data={{
            labels: [
              'Понедельник',
              'Вторник',
              'Среда',
              'Четверг',
              'Пятница',
              'Суббота',
              'Воскресенье',
            ],
            datasets: [
              {
                label: 'My First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: true,
                backgroundColor: 'rgba(0, 210, 255, 0.05)',
                borderColor: 'red',
                tension: 0.6,
              },
              {
                label: 'My SECOND Dataset',
                data: [1, 23, 234, 87, 21, 98, 27],
                fill: false,
                borderColor: 'green',
                tension: 0.6,
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                display: true,
                labels: {
                  color: 'black',
                },
              },
            },
          }}
        />
      </div>
      <div className="cicle">
        <Doughnut
          data={{
            labels: ['Россия', 'США', 'Европа'],
            datasets: [
              {
                label: 'My First Dataset',
                data: [300, 50, 100],
                backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
                hoverOffset: 4,
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default CircleChart;
