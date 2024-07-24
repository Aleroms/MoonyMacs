import React, { useState } from "react";
import "./Quotes.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
interface QuotesProps {
  quotes: {
    author: string;
    quote: string;
  }[];
}
const Quotes: React.FC<QuotesProps> = ({ quotes }) => {
  const [quoteIdx, setQuoteIdx] = useState(0);

  const nextQuote = () => {
    setQuoteIdx(quoteIdx === quotes.length - 1 ? 0 : quoteIdx + 1);
  };
  const prevQuote = () => {
    setQuoteIdx(quoteIdx === 0 ? quotes.length - 1 : quoteIdx - 1);
  };
  return (
    <div className="quote-carousel">
      <BsArrowLeftCircleFill className="quote-arrow arrow-left" onClick={prevQuote} />
      {quotes.map((quote, idx) => {
        return (
          <div key={idx} className={idx === quoteIdx ? "quote" : "quote-hidden"}>
            <FaQuoteLeft className="quote-left" />
            <p>{quote.quote}</p>
            <span>- {quote.author}</span>
            <FaQuoteRight className="quote-right" />
          </div>
        );
      })}
      <BsArrowRightCircleFill
        className="quote-arrow arrow-right"
        onClick={nextQuote}
      />
    </div>
  );
};

export default Quotes;
