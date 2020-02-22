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
  change: boolean;
  identifier?: string; // @TODO
  lastPrice: string;
  currentPrice: string;
  percentage: string;
}


const FinancialTicker: React.FunctionComponent<IFinancialTrackerProps> = (props) => {
  const statusClassName = props.change ? stylesFinancial.tickerChangePositive : stylesFinancial.tickerChangeNegative;
  return (<div data-id={props.id} className={[stylesGeneric.tickerItem, stylesFinancial.tickerItemFinancial].join(' ')}>
    <div className={stylesFinancial.tickerTopLevel}>
      <div className={stylesFinancial.tickerSymbol}>{props.symbol}</div>
      <div className={stylesFinancial.lastPrice}>{props.lastPrice}</div>
    </div>
    <div className={stylesFinancial.tickerStats}>
      <img  className={stylesFinancial.tickerMovement} src={props.change ? chevronUp : chevronDown} alt={props.change ? 'up' : 'down'} />
      <div className={[statusClassName, stylesFinancial.tickerInfo].join(' ')}>
        <div className={stylesFinancial.tickerChangePercentage}>{props.percentage}</div>
        <div className={stylesFinancial.tickerCurrentPrice}>{props.currentPrice}</div>
      </div>
    </div>
  </div>)
}

export default FinancialTicker;
