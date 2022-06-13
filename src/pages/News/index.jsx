import React from 'react';
import NavBar from '../../components/NavBar';
import SubHeader from '../../components/SubHeader';
import NewsItem from '../../components/NewsItem';
import PrimaryNews from '../../components/PrimaryNews';
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
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
        </div>
        <div className="primary_news">
        <PrimaryNews/>
        <PrimaryNews/>
        <PrimaryNews/>
        <PrimaryNews/>
        <PrimaryNews/>
      </div>
      </div>
    </div>
  );
}

export default News;
