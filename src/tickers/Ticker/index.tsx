import * as React from 'react';
import styles from './styles.css';

interface TickerListProps {
  show: boolean;
  name?: string;
  slideSpeed: number;
  visibleItems: number;
}

const TickerList: React.FunctionComponent<TickerListProps> = (props) => {
  return <div className={styles.ticker}>
    <div className={styles['ticker-list']}>
      {props.children}
    </div>
    <div className={styles['ticker-list']}>
      {props.children}
    </div>
  </div>
}

export default TickerList;
