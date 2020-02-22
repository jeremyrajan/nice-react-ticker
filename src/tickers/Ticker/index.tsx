import * as React from 'react';
import styles from './styles.css';

interface TickerListProps {
  show: boolean;
  name?: string;
  slideSpeed: number;
  visibleItems: number;
  isNewsTicker?: boolean;
}

const TickerList: React.FunctionComponent<TickerListProps> = (props) => {
  return <div className={styles.ticker}>
    <div className={styles['ticker-list']}>
      {props.children}
    </div>
    {!props.isNewsTicker ?
      <div className={styles['ticker-list']}>
        {props.children}
      </div>
      : ''
    }
  </div>
}

export default TickerList;
