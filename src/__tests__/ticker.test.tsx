/**
 * @jest-environment jsdom
 */

import * as React from "react";
import { render } from "react-dom";
import ReactTicker, { FinancialTicker, NewsTicker } from "..";

describe("should export financial ticker and news ticker", () => {
  expect(FinancialTicker).toBeDefined;
  expect(NewsTicker).toBeDefined;
});

describe("ticker container", () => {
  it("renders without crashing (including financial ticker and news ticker", () => {
    const div: any = document.createElement("div");
    render(
      <div className="test">
        <ReactTicker>
          <FinancialTicker
            id={1}
            change={true}
            symbol="S&P 500"
            lastPrice="3372.2"
            percentage="0.38%"
            currentPrice="12.9"
          />
        </ReactTicker>

        <ReactTicker isNewsTicker={true}>
          <NewsTicker
            id={1}
            title="Test"
            url="https://google.com"
            meta="10:11"
          />
        </ReactTicker>
      </div>,
      div
    );
  });
});

describe("financial ticker", () => {
  it("should render the right information", () => {
    const div: any = document.createElement("div");
    render(
      <ReactTicker>
        <FinancialTicker
          id={1}
          change={true}
          symbol="S&P 500"
          lastPrice="3372.2"
          percentage="0.38%"
          currentPrice="12.9"
        />
      </ReactTicker>,
      div
    );

    console.log(div.innerHTML);

    expect(div.querySelectorAll(".tickerItem").length).toEqual(2); // for the animation
    const tickerItem = div.querySelector(".tickerItem");
    expect(tickerItem).toBeTruthy;
    expect(tickerItem.querySelector(".tickerSymbol").innerHTML).toEqual(
      "S&amp;P 500"
    );
    expect(tickerItem.querySelector(".lastPrice").innerHTML).toEqual("3372.2");
    expect(
      tickerItem.querySelector(".tickerChangePercentage").innerHTML
    ).toEqual("0.38%");
    expect(tickerItem.querySelector(".tickerCurrentPrice").innerHTML).toEqual(
      "12.9"
    );
    expect(
      tickerItem.querySelector(".tickerMovement").getAttribute("alt")
    ).toEqual("up");
    expect(tickerItem.querySelector(".tickerChangePositive")).not.toBe(null);
  });

  it("should render change={false} negative", () => {
    const div: any = document.createElement("div");
    render(
      <ReactTicker>
        <FinancialTicker
          id={1}
          change={false}
          symbol="S&P 500"
          lastPrice="3372.2"
          percentage="0.38%"
          currentPrice="12.9"
        />
      </ReactTicker>,
      div
    );

    console.log(div.innerHTML);
    const tickerItem = div.querySelector(".tickerItem");
    expect(
      tickerItem.querySelector(".tickerMovement").getAttribute("alt")
    ).toEqual("down");
    expect(tickerItem.querySelector(".tickerChangePositive")).toBe(null);
  });
});

describe("News Ticker", () => {
  it("should render the right information", () => {
    const div: any = document.createElement("div");
    render(
      <ReactTicker>
        <NewsTicker id={1} title="Test" url="https://google.com" meta="10:11" />
      </ReactTicker>,
      div
    );

    console.log(div.innerHTML);

    expect(div.querySelectorAll(".tickerItem").length).toEqual(2); // for the animation
    const tickerItem = div.querySelector(".tickerItem");
    expect(tickerItem).toBeTruthy;
    expect(tickerItem.href).toEqual("https://google.com/");
    expect(tickerItem.querySelector(".title").innerHTML).toEqual("Test");
    expect(tickerItem.querySelector(".meta").innerHTML).toEqual("10:11");
  });
});
