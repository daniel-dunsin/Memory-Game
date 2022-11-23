import React from "react";
import { useAppContext } from "../context";
import { ICard } from "../types";
import { Card } from "./card";

export function CardsList() {
  const { cards } = useAppContext();
  return (
    <section className="grid grid-cols-4 gap-[20px] justify-center items-center mt-6 mb-2">
      {cards.map((card: ICard, index) => (
        <Card key={index} {...card} />
      ))}
    </section>
  );
}
