import React from 'react';
import './StatWidget.scss';

const StatWidget = ({ title, today, yestarday, month, bgcolor }) => {
  console.log(bgcolor);
  return (
    <div className="statwidget" style={{ backgroundColor: `${bgcolor}` }}>
      <div className="title">{title}</div>
      <div className="stats">
        <div className="stats-block">
          <div className="stats-block__title">Сегодня</div>
          <div className="stats-block__count">{today}</div>
        </div>
        <div className="stats-block">
          <div className="stats-block__title">Вчера</div>
          <div className="stats-block__count">{yestarday}</div>
        </div>
        <div className="stats-block">
          <div className="stats-block__title">Месяц</div>
          <div className="stats-block__count">{month}</div>
        </div>
      </div>
    </div>
  );
};

export default StatWidget;
