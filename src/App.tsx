import React from "react";
import { Title } from "./components/title";
import { CardsList } from "./components/cardsList";
import { Turns } from "./components/turns";

function App() {
  return (
    <main className="w-full min-h-screen bg-mainBlue">
      <div className="w-full p-4 max-w-[900px] mx-auto">
        <Title />
        <CardsList />
        <Turns />
      </div>
    </main>
  );
}

export default App;
