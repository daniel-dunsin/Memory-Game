export type IAppContext = {
  cards: ICard[];
  shuffleCards: () => void;
  turns: number;
  selectCard: (card: ICard) => void;
  firstCard: ICard | null;
  secondCard: ICard | null;
  matchedCards: string[];
  modalOpen: boolean;
  closeModal: () => void;
};

export type ICard = {
  src: string;
  id?: string;
};
