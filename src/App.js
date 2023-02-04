import "./App.scss";
import dice from "./images/icon-dice.svg";
import { useState, useEffect } from "react";
function App() {
  const [quote, setQuote] = useState("");
  const [quoteNum, setQuoteNum] = useState("");

  function getRequest() {
    setQuote("");
    setQuoteNum("");
    fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
      .then((response) => response.json())
      .then((response) => {
        setQuote(response?.slip?.advice);
        setQuoteNum(response?.slip?.id);
      });
  }

  useEffect(() => {
    getRequest();
  }, []);

  useEffect(() => {
    console.log(quote);
  }, [quote, quoteNum]);

  return (
    <div className="App">
      <div className="quote-wrapper">
        <p className="advice-number">{`Advice #${quoteNum}`}</p>

        {quote === "" ? (
          <div className="progress">
            <div className="color"></div>
          </div>
        ) : (
          <p className="quote">{quote}</p>
        )}

        <div className="decorations-wrapper">
          <div></div>
          <div>
            <div></div>
            <div></div>
          </div>
          <div></div>
        </div>

        <div className="btn-wrapper" onClick={getRequest}>
          <img className="btn" src={dice} alt="button"></img>
        </div>
      </div>
    </div>
  );
}

export default App;
