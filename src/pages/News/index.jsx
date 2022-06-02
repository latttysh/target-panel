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
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
    </div>
  );
}

export default News;
