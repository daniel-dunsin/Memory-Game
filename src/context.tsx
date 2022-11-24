import React, { createContext, useContext, useEffect, useState } from "react";
import type { IAppContext, ICard } from "./types";
import { cardImages } from "./constants";

const AppContext = createContext({} as IAppContext);

export const AppProvider = ({ children }: { children: React.ReactElement }) => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [turns, setTurns] = useState<number>(0);
  const [firstCard, setFirstCard] = useState<ICard | null>(null);
  const [secondCard, setSecondCard] = useState<ICard | null>(null);
  const [matchedCards, setMatchedCards] = useState<string[]>([]);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(true);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .map((card: ICard) => ({
        ...card,
        id: Math.random().toString(),
      }))
      .sort(() => Math.random() - 0.5);
    setDisabled(false);
    setCards(() => shuffledCards);
    setMatchedCards([]);
    setTurns(0);
    setFirstCard(null);
    setSecondCard(null);
  };

  const resetTurns = () => {
    setFirstCard(null);
    setSecondCard(null);
    setTurns((prev) => prev + 1);
    setDisabled(false);
  };

  const selectCard = (card: ICard) => {
    if (!disabled) {
      firstCard ? setSecondCard(card) : setFirstCard(card);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    shuffleCards();
  };

  useEffect(() => {
    setDisabled(true);
    if (secondCard?.src && firstCard?.src) {
      if (secondCard.src === firstCard.src) {
        setMatchedCards([...matchedCards, firstCard?.src as string]);
        resetTurns();
      } else {
        setTimeout(() => resetTurns(), 1000);
      }
    } else {
      setDisabled(false);
    }
  }, [secondCard, firstCard]);

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    if (matchedCards.length === cardImages.length) {
      setModalOpen(true);
    } else {
      setModalOpen(false);
    }
  }, [matchedCards]);

  return (
    <AppContext.Provider
      value={{
        cards,
        shuffleCards,
        turns,
        selectCard,
        matchedCards,
        firstCard,
        secondCard,
        modalOpen,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
