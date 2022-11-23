import React from "react";
import { useAppContext } from "../context";
import { FaCheck } from "react-icons/fa";
export function Modal() {
  const { modalOpen, closeModal } = useAppContext();

  if (!modalOpen) {
    return <></>;
  }
  return (
    <div className="fixed w-full h-screen flex justify-center items-center top-0 left-0 z-20 bg-[rgba(0,0,0,0.4)]">
      <div className="w-[90vw] mx-auto max-w-[400px] p-4 rounded-md border-2 border-white bg-mainBlue shadow-md flex flex-col items-center gap-y-4">
        <i className="w-[70px] h-[70px] bg-mainPink flex justify-center items-center text-[30px] text-white border-2 border-white rounded-full">
          <FaCheck />
        </i>
        <h1 className="text-[20px] font-bold tracking-wider text-white">
          Congratulations, you won!
        </h1>
        <button
          className="text-[20px] text-white px-4 py-2 font-bold border-2 border-white rounded-md hover:bg-mainPink tracking-wider"
          onClick={closeModal}
        >
          New Game
        </button>
      </div>
    </div>
  );
}
