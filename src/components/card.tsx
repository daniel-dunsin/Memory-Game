import React from "react";
import { ICard } from "../types";

export function Card({ src, id }: ICard) {
  return (
    <article className="w-full">
      <div className="relative w-full">
        <img src={src} alt={src} className="border-2 border-white rounded-md" />
        <img
          src="./img/cover.png"
          alt="cover"
          className="absolute top-0 left-0 w-full border-2 border-white rounded-md"
        />
      </div>
    </article>
  );
}
