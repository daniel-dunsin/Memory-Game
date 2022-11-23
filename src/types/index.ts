export type IAppContext = {
  cards: ICard[];
  shuffleCards: () => void;
  turns: number;
};

export type ICard = {
  src: string;
  id?: string;
};
