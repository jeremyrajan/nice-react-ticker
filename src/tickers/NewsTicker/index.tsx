import * as React from 'react';
import newsStyles from './styles.css';
import genericStyles  from '../Ticker/styles.css';

interface NewsTickerProps {
  id: number;
  title: string;
  url: string;
  meta: string;
  icon?: string;
  iconAlt?: string;
}

const NewsTicker: React.FunctionComponent<NewsTickerProps> = (props) => {
  return (
    <div className={[newsStyles.newsticker, genericStyles.tickerItem].join(' ')}>
      <div className={newsStyles.icon}><img src={props.icon} alt={props.iconAlt} /></div>
      <div className={newsStyles.newsWrapper}>
        <div className={newsStyles.title}>{props.title}</div>
        <small className={newsStyles.meta}>{props.meta}</small>
      </div>
    </div>
  )
}

export default NewsTicker;
