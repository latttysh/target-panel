import React from 'react';
import './NewsItem.scss';

function NewsItem() {
  return (
    <div className="newsitem">
      <div className="newsitem__img">
        <img src="./news-bg.jpg" alt="" />
      </div>
      <div className="newsitem-content">
        <div className="newsitem-content__subtitle">Финансы</div>
        <div className="newsitem-content__title">Повышение зарплат!</div>
        <div className="newsitem-content__description">
          Секретный способ повышения зарплаты. Его скрывали годами. Данная информация является
          засекреченной и за неё можно сесть. Нужно всего лишь использовать мазь
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
