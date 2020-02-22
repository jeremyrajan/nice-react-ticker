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
    <a className={[newsStyles.newsticker, genericStyles.tickerItem].join(' ')} href={props.url} target="_blank">
      <div className={newsStyles.icon}><img src={props.icon} alt={props.iconAlt} /></div>
      <div className={newsStyles.newsWrapper}>
        <div className={newsStyles.title}>{props.title}</div>
        <small className={newsStyles.meta}>{props.meta}</small>
      </div>
    </a>
  )
}

export default NewsTicker;
