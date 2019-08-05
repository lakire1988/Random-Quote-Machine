import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const QuoteMachine = props => (
  <div class="card">
    <h1 class="card-header">RANDOM QUOTE MACHINE</h1>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <p className="card-text" id="text">
          <q> {props.selectedQuote ? props.selectedQuote.quote : ""}</q>
        </p>
        <footer class="blockquote-footer" id="author">
          <cite title="Quote Author">
            {props.selectedQuote ? props.selectedQuote.author : ""}
          </cite>
        </footer>
        <button
          className="btn btn-primary btn-sm"
          style={{ marginRight: 60 }}
          id="new-quote"
          onClick={props.newQuoteIndex}
        >
          {" "}
          Next quote
        </button>
        <a id="tweet-quote" a href="https://twitter.com/intent/tweet">
          <FontAwesomeIcon icon={faTwitter} onClick={props.shareOnTwitter} />{" "}
          Tweet
        </a>
      </blockquote>
    </div>
  </div>
);

export default QuoteMachine;
