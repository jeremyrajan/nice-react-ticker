import React, { Component } from 'react'
import Ticker, { FinancialTicker, NewsTicker } from 'nice-react-ticker';
import icon from './news-icon.png';


export default class App extends Component {
  render() {
    return (
      <div>
        <Ticker show={true} slideSpeed={15}>
          <FinancialTicker id="1" change={true} symbol="S&P 500" lastPrice="3372.2" percentage="0.38%" currentPrice="12.9" />
          <FinancialTicker id="2" change={true} symbol="AAPL" lastPrice="3372.2" percentage="0.38%" currentPrice="12.9" />
          <FinancialTicker id="3" change={true} symbol="GOOG" lastPrice="3372.2" percentage="0.38%" currentPrice="12.9" />
          <FinancialTicker id="4" change={false} symbol="S&P 500" lastPrice="3372.2" percentage="0.38%" currentPrice="12.9" />
          <FinancialTicker id="5" change={false} symbol="S&P 500" lastPrice="3372.2" percentage="0.38%" currentPrice="12.9" />
          <FinancialTicker id="6" change={false} symbol="S&P 500" lastPrice="3372.2" percentage="0.38%" currentPrice="12.9" />
        </Ticker>

        <div className="newsticker">
          <Ticker show={true} isNewsTicker={true}>
            <NewsTicker id="1" icon={icon} title="Blue passports to be issued to Brits for the first time in decades next month decades next month decades next month decades next month" url=" https://metro.co.uk/2020/02/22/blue-passports-issued-brits-first-time-decades-next-months-12281012/?ito=newsnow-feed" meta="11:10:20" />
            <NewsTicker id="2" title="Blue passports to be issued to Brits for the first time in decades next month" url=" https://metro.co.uk/2020/02/22/blue-passports-issued-brits-first-time-decades-next-months-12281012/?ito=newsnow-feed" meta="11:10:20" />
            <NewsTicker id="3" title="Blue passports to be issued to Brits for the first time in decades next month" url=" https://metro.co.uk/2020/02/22/blue-passports-issued-brits-first-time-decades-next-months-12281012/?ito=newsnow-feed" meta="11:10:20" />
            <NewsTicker id="4" title="Blue passports to be issued to Brits for the first time in decades next month" url=" https://metro.co.uk/2020/02/22/blue-passports-issued-brits-first-time-decades-next-months-12281012/?ito=newsnow-feed" meta="11:10:20" />
            <NewsTicker id="5" icon={icon} title="Blue passports to be issued to Brits for the first time in decades next month" url=" https://metro.co.uk/2020/02/22/blue-passports-issued-brits-first-time-decades-next-months-12281012/?ito=newsnow-feed" meta="11:10:20" />
            <NewsTicker id="6" icon={icon} title="Blue passports to be issued to Brits for the first time in decades next month" url=" https://metro.co.uk/2020/02/22/blue-passports-issued-brits-first-time-decades-next-months-12281012/?ito=newsnow-feed" meta="11:10:20" />
          </Ticker>
        </div>
      </div>
    )
  }
}
