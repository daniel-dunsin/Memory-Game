import React from "react";
import { useAppContext } from "../context";

export function Turns() {
  const { turns } = useAppContext();
  return (
    <section className="mt-12 mb-6 flex justify-center items-center w-full text-white text-[22px] font-bold tracking-wider">
      <p>Turns: {turns}</p>
    </section>
  );
}
