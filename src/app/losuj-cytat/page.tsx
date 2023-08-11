import React, { FC, useEffect, useState } from "react";
import { performRequest } from "../../../lib/datocms";
import QuoteContainer from "./components/QuoteContainer";

const PAGE_QUOTES_QUERY = `
  query Quotes {
    allQuotes {
      id
      author
      quote
    }
  }`;

export default async function DrawQuote() {
  const { data } = await performRequest({ query: PAGE_QUOTES_QUERY });

  return (
    <section className="bg-cover text-black  bg-center bg-mobile-bg md:bg-desktop-bg ">
      <QuoteContainer Quotes={data.allQuotes} />
    </section>
  );
}
