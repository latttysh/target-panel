import React from 'react';
import NavBar from '../../components/NavBar';
import SubHeader from '../../components/SubHeader';
import NewsItem from '../../components/NewsItem';
import './News.scss';

function News() {
  return (
    <div className="News">
      <NavBar />
      <SubHeader title="Блог" />
      <div className="news-content">
        <div className="news-items">
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
        </div>
        <div className="important-news">
          <SubHeader />
          <div className="important-news-content">
            Новость <br /> новость <br />
            новость
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
