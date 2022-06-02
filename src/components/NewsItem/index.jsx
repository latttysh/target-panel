import React from 'react';
import './NewsItem.scss';

function NewsItem() {
  return (
    <div className="newsitem">
      <div className="newsitem__img">ФОТО НОВОСТИ</div>
      <div className="newsitem-content">
        <div className="newsitem-content__title">Новая новость!!!!</div>
        <div className="newsitem-content__description">
          Тут будет описание нашей новой новости. Оно очень длинное и все хотят его прочитать <br />{' '}
          Тут разные данные, какие только пожелаете. Но это вы уже сами решите
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
