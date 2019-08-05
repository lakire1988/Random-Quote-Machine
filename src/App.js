import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import QuoteMachine from "./components/QuoteMachine";
//import { random } from "lodash";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuotesIndex: null
    };
    this.selectQuoteIndex = this.selectQuoteIndex.bind(this);
    this.newQuoteIndex = this.newQuoteIndex.bind(this);
  }
  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
    )
      .then(data => data.json())
      .then(quotes => this.setState({ quotes }, this.newQuoteIndex));
  }

  get selectedQuote() {
    if (
      !this.state.quotes.length ||
      !Number.isInteger(this.state.selectedQuotesIndex)
    ) {
      return undefined;
    }
    return this.state.quotes[this.state.selectedQuotesIndex];
  }
  selectQuoteIndex() {
    if (!this.state.quotes.length) {
      return;
    }
    return Math.floor(Math.random() * this.state.quotes.length);
    //return random(0, this.state.quotes.length - 1);
  }
  newQuoteIndex() {
    this.setState({ selectedQuotesIndex: this.selectQuoteIndex() });
  }
  shareOnTwitter = () => {
    // found on https://gist.github.com/McKinneyDigital/2884508#file-share-twitter-js
    var url = "twitter.com";
    let text = `${this.selectedQuote.author} - ${this.selectedQuote.quote}`;
    window.open(
      "http://twitter.com/share?url=" +
        encodeURIComponent(url) +
        "&text=" +
        encodeURIComponent(text),
      "",
      "left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0"
    );
  };

  render() {
    return (
      <div className="App" id="quote-box">
        <QuoteMachine
          newQuoteIndex={this.newQuoteIndex}
          selectedQuote={this.selectedQuote}
        />
      </div>
    );
  }
}

export default App;
