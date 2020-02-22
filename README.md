# nice-react-ticker

> Nicest react ticker in town

[![NPM](https://img.shields.io/npm/v/nice-react-ticker.svg)](https://www.npmjs.com/package/nice-react-ticker) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Build Status](https://travis-ci.com/jeremyrajan/nice-react-ticker.svg?branch=master)](https://travis-ci.com/jeremyrajan/nice-react-ticker)

## Install

```bash
npm install --save nice-react-ticker
```

**Demo**: https://jeremyrajan.github.io/nice-react-ticker/

## Usage

The library provides with 2 kinds of tickers:

1. Financial Ticker: Heavily inspired from https://www.tradingview.com/
2. News Ticker: Lightweight news ticker

You can refer to the demo below for the props and refer to `/example` folder for implementation.

```tsx
import React, { Component } from 'react'
import Ticker, { FinancialTicker, NewsTicker } from 'nice-react-ticker';
import icon from './news-icon.png'; // add images, please make sure they can be set as src


export default class App extends Component {
  render() {
    return (
      <div>
        <Ticker>
          <FinancialTicker id="1" change={true} symbol="S&P 500" lastPrice="3372.2" percentage="0.38%" currentPrice="12.9" />
          <FinancialTicker id="2" change={true} symbol="AAPL" lastPrice="3372.2" percentage="0.38%" currentPrice="12.9" />
          <FinancialTicker id="3" change={true} symbol="GOOG" lastPrice="3372.2" percentage="0.38%" currentPrice="12.9" />
          <FinancialTicker id="4" change={false} symbol="S&P 500" lastPrice="3372.2" percentage="0.38%" currentPrice="12.9" />
          <FinancialTicker id="5" change={false} symbol="S&P 500" lastPrice="3372.2" percentage="0.38%" currentPrice="12.9" />
          <FinancialTicker id="6" change={false} symbol="S&P 500" lastPrice="3372.2" percentage="0.38%" currentPrice="12.9" />
        </Ticker>

        <div className="newsticker">
          <Ticker isNewsTicker={true}> {// helps with setting up animation}
            <NewsTicker id="1" icon={icon} title="Blue passports to be issued to Brits for the first time in decades next month decades next month decades next month decades next month" url=" https://metro.co.uk/2020/02/22/blue-passports-issued-brits-first-time-decades-next-months-12281012/?ito=newsnow-feed" meta="11:10:20"  />
            <NewsTicker id="2" icon={icon} title="Blue passports to be issued to Brits for the first time in decades next month" url=" https://metro.co.uk/2020/02/22/blue-passports-issued-brits-first-time-decades-next-months-12281012/?ito=newsnow-feed" meta="11:10:20" />
            <NewsTicker id="3" icon={icon} title="Blue passports to be issued to Brits for the first time in decades next month" url=" https://metro.co.uk/2020/02/22/blue-passports-issued-brits-first-time-decades-next-months-12281012/?ito=newsnow-feed" meta="11:10:20" />
            <NewsTicker id="4" icon={icon} title="Blue passports to be issued to Brits for the first time in decades next month" url=" https://metro.co.uk/2020/02/22/blue-passports-issued-brits-first-time-decades-next-months-12281012/?ito=newsnow-feed" meta="11:10:20" />
            <NewsTicker id="5" icon={icon} title="Blue passports to be issued to Brits for the first time in decades next month" url=" https://metro.co.uk/2020/02/22/blue-passports-issued-brits-first-time-decades-next-months-12281012/?ito=newsnow-feed" meta="11:10:20" />
            <NewsTicker id="6" icon={icon} title="Blue passports to be issued to Brits for the first time in decades next month" url=" https://metro.co.uk/2020/02/22/blue-passports-issued-brits-first-time-decades-next-months-12281012/?ito=newsnow-feed" meta="11:10:20" />
          </Ticker>
        </div>
      </div>
    )
  }
}

```

## License

MIT © [jeremyrajan](https://github.com/jeremyrajan)
