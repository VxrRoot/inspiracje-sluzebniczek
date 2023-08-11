"use client";
import React, { FC, useEffect, useState } from "react";

interface IQuoteContainer {
  Quotes: { id: number; author: string; quote: string }[];
}

const QuoteContainer: FC<IQuoteContainer> = ({ Quotes }) => {
  console.log(Quotes);

  const [randomIndex, setRandomIndex] = useState(0);
  const drawQuote = () => {
    const randomIndex = Math.floor(Math.random() * Quotes.length);
    setRandomIndex(randomIndex);
  };

  useEffect(() => {
    drawQuote();
  }, []);

  return (
    <div className="flex justify-end pb-14 md:justify-center items-center flex-col h-screen gap-4 max-w-4xl px-6 mx-auto ">
      <p className="text-2xl text-center">{`"${Quotes[randomIndex].quote},,`}</p>
      <p className="text-l italic">{`${Quotes[randomIndex].author}`}</p>
      <button
        className="px-4 py-2 border border-black hover:border-cyan-400 transition-colors mt-4"
        onClick={drawQuote}
      >
        Losuj kolejny
      </button>
    </div>
  );
};

export default QuoteContainer;
