import React, { Component } from 'react'

import Ticker, {FinancialTicker} from 'nice-react-ticker'


export default class App extends Component {
  render () {
    return (
      <div>
        <Ticker show={true}>
          <FinancialTicker id="1" status={true} symbol="S&P 500" lastPrice="3372.2" percentage="0.38%" currentPrice="12.9" />
          <FinancialTicker id="2" status={true} symbol="AAPL" lastPrice="3372.2" percentage="0.38%" currentPrice="12.9" />
          <FinancialTicker id="3" status={true} symbol="GOOG" lastPrice="3372.2" percentage="0.38%" currentPrice="12.9" />
          <FinancialTicker id="4" status={false} symbol="S&P 500" lastPrice="3372.2" percentage="0.38%" currentPrice="12.9" />
          <FinancialTicker id="5" status={false} symbol="S&P 500" lastPrice="3372.2" percentage="0.38%" currentPrice="12.9" />
          <FinancialTicker id="6" status={false} symbol="S&P 500" lastPrice="3372.2" percentage="0.38%" currentPrice="12.9" />
        </Ticker>
      </div>
    )
  }
}
