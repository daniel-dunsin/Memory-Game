import React, { createContext, useContext, useEffect, useState } from "react";
import type { IAppContext, ICard } from "./types";
import { cardImages } from "./constants";

const AppContext = createContext({} as IAppContext);

export const AppProvider = ({ children }: { children: React.ReactElement }) => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [turns, setTurns] = useState<number>(0);
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .map((card: ICard) => ({
        ...card,
        id: Math.random().toString(),
      }))
      .sort(() => Math.random() - 0.5);
    setCards(() => shuffledCards);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <AppContext.Provider value={{ cards, shuffleCards, turns }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
