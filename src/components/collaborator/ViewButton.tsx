import React, { useState } from "react";
import { ModalPopUp } from "./ModalPopUp";

export function ViewButton() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        onClick={() => setShow(true)}
        className="flex gap-2 items-center w-[30px] h-[30px] text-sm text-white lowercase bg-gray-500 rounded-lg hover:bg-blue-700 cursor-pointer transition-all"
      >
        <i className="fa-solid fa-user-pen mx-auto"></i>
      </button>
      {show && <ModalPopUp />}
    </>
  );
}
