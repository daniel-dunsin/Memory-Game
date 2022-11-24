import React, { useEffect, useState } from "react";
import { useAppContext } from "../context";
import { ICard } from "../types";

export function Card({ src, id }: ICard) {
  const [flipped, setFlipped] = useState<boolean>(false);

  const { firstCard, secondCard, matchedCards, selectCard } = useAppContext();

  useEffect(() => {
    if (
      firstCard?.id === id ||
      secondCard?.id === id ||
      matchedCards.includes(src)
    ) {
      setFlipped(true);
    } else {
      setFlipped(false);
    }
  }, [firstCard, secondCard, matchedCards]);

  return (
    <article className={`w-full relative card ${flipped && "flipped"}`}>
      <img
        src={src}
        alt={id}
        className="border-2 border-white rounded-md front"
      />
      <img
        src="./img/cover.png"
        alt={src}
        className="w-full border-2 border-white rounded-md back"
        onClick={() => {
          selectCard({ src, id });
        }}
      />
    </article>
  );
}
