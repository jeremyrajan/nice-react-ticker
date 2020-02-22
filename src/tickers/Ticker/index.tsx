import * as React from 'react';
import styles from './styles.css';

interface TickerListProps {
  name?: string;
  slideSpeed?: number; // @TODO not implemented
  visibleItems?: number; // @TODO not implemented
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
