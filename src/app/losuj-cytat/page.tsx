"use client";
import React, { FC, useEffect, useState } from "react";
import { Quotes } from "../../../data/Quotes";

const DrawQuote: FC = () => {
  const [randomIndex, setRandomIndex] = useState(0);
  const drawQuote = () => {
    const randomIndex = Math.floor(Math.random() * Quotes.length);
    setRandomIndex(randomIndex);
  };

  useEffect(() => {
    drawQuote();
  }, []);

  return (
    <div className="flex justify-center items-center flex-col h-screen gap-12">
      <p className="text-xl">{`"${Quotes[randomIndex].quote},,`}</p>
      <button
        className="px-4 py-2 border border-white hover:border-cyan-400 transition-colors"
        onClick={drawQuote}
      >
        Losuj kolejny
      </button>
    </div>
  );
};

export default DrawQuote;
