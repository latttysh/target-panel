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
                label: 'Заявки',
                data: [1, 59, 80, 81, 56, 55, 40],
                fill: true,
                lineTension: 0.5,
                backgroundColor: 'RGB(49, 119, 167, 0.4)',
                borderColor: 'RGB(49, 119, 167, 1)',
                borderCapStyle: 'round',
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
              },
              {
                label: 'Заказы',
                data: [1, 23, 234, 87, 21, 98, 27],
                fill: true,
                lineTension: 0.5,
                backgroundColor: 'RGB(45, 82, 170, 0.4)',
                borderColor: 'RGB(45, 82, 170, 1)',
                borderCapStyle: 'round',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 3,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
              },
            ],
          }}
          options={{
            responsive: true,
            interaction: {
              mode: 'index',
              axis: 'xy',
            },
            scales: {
              xAxes: {
                grid: {
                  display: 'true',
                  color: '#171717',
                  lineWidth: 2,
                  drawOnChartArea: false,
                },
                ticks: {
                  color: 'white',
                  padding: 10,
                },
              },
              yAxes: {
                grid: {
                  display: 'true',
                  color: '#171717',
                  lineWidth: 2,
                },
                ticks: {
                  color: 'white',
                  padding: 10,
                },
              },
            },
            plugins: {
              legend: {
                display: true,
                labels: {
                  color: 'white',
                  padding: 10,
                  boxWidth: 50,
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
                backgroundColor: ['RGB(60, 186, 196)', 'RGB(86, 127, 201)', 'RGB(123, 70, 237)'],
                hoverOffset: 2,
              },
            ],
          }}
          options={{
            borderColor: '#1e1e1e',
          }}
        />
      </div>
    </div>
  );
};

export default CircleChart;
