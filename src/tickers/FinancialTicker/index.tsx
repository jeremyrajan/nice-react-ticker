/**
 * @component FinancialTicker
 */

import * as React from 'react';
import stylesGeneric from '../Ticker/styles.css';
import stylesFinancial from './styles.css';

import chevronUp from '../../images/chevron-up.svg';
import chevronDown from '../../images/chevron-down.svg';

interface IFinancialTrackerProps {
  id: number;
  symbol: string;
  status: boolean;
  identifier: string;
  lastPrice: string;
  currentPrice: string;
  percentage: number;
}



const FinancialTicker: React.FunctionComponent<IFinancialTrackerProps> = (props) => {
  const statusClassName = props.status ? stylesFinancial.tickerChangePositive : stylesFinancial.tickerChangeNegative;
  return (<div data-id={props.id} className={[stylesGeneric.tickerItem, stylesFinancial.tickerItemFinancial].join(' ')}>
    <div className={stylesFinancial.tickerTopLevel}>
      <div className={stylesFinancial.tickerSymbol}>{props.symbol}</div>
      <div className={stylesFinancial.lastPrice}>{props.lastPrice}</div>
    </div>
    <div className={stylesFinancial.tickerStats}>
      <img  className={stylesFinancial.tickerMovement}src={props.status ? chevronUp : chevronDown} alt={props.status ? 'up' : 'down'} />
      <div className={[statusClassName, stylesFinancial.tickerInfo].join(' ')}>
        <div className={stylesFinancial.tickerChangePercentage}>{props.percentage}</div>
        <div className={stylesFinancial.tickerCurrentPrice}>{props.currentPrice}</div>
      </div>
    </div>
  </div>)
}

export default FinancialTicker;
