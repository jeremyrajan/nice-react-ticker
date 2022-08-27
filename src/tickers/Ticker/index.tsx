import * as React from 'react';
import styles from './styles.css';

interface TickerListProps {
  children: React.ReactNode;
  name?: string;
  slideSpeed?: number;
  visibleItems?: number; // @TODO not implemented
  isNewsTicker?: boolean;
}

const TickerList: React.FunctionComponent<TickerListProps> = (props) => {
  const animation = props.slideSpeed ? `scroll ${props.slideSpeed}s linear infinite` : 'scroll 15s linear infinite';
  return (
    <div className={styles.ticker}>
      <div style={{ animation: animation, display: "flex" }}>
        <div className={styles['ticker-list']}>
          {props.children}
        </div>

        {
          !props.isNewsTicker ? <div className={styles['ticker-list']} aria-hidden={true}>
            {props.children}
          </div> : ''
        }
      </div>
    </div>
  )
}

export default TickerList;
