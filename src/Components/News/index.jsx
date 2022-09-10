import { Button } from '../Button';
import { NewsCard } from '../NewsCard';
import './News.css';

export function News() {
  return (
    <div className='news'>
      <h2 className='news-header'>Навiны</h2>
      <div className='newscard-container'>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <div className='news-btn'>
        <Button>
          Хачу яшчэ навiн
        </Button>
      </div>
    </div>
  )
}