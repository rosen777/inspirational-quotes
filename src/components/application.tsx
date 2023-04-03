import { useEffect, useState } from 'react';
import Quotes from './quotes';
import InspirationalQuote from './quote';
import Loading from './loading';

export type Quote = {
  id: number;
  content: string;
  source?: string;
};

export const fetchRandomQuote = async () => {
  const response = await fetch(`/api/quotes/random`);
  return response.json();
};

export const fetchQuotes = async (count: number) => {
  const response = await fetch(`/api/quotes?limit=${count}`);
  return response.json();
};

const Application = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  return (
    <main className="mx-auto w-full max-w-2xl py-16">
      <Quotes setQuotes={setQuotes}>
        {quotes.map((quote) => {
          return (
            <InspirationalQuote
              content={quote.content}
              key={quote.id}
              source={quote.source}
            />
          );
        })}
      </Quotes>
    </main>
  );
};

export default Application;
