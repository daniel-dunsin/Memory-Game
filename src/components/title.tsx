import React from "react";
import { useAppContext } from "../context";

export function Title() {
  const { shuffleCards } = useAppContext();
  return (
    <section className="text-center flex flex-col gap-y-4 items-center mt-2">
      <h1 className="text-white text-[28px] font-bold tracking-wider cursor-pointer">
        Magic Match
      </h1>
      <button
        className="text-[20px] text-white px-4 py-2 font-bold border-2 border-white rounded-md hover:bg-mainPink tracking-wider"
        onClick={shuffleCards}
      >
        New Game
      </button>
    </section>
  );
}
