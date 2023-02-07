import React from "react";

export function SelectedDate() {
  return (
    <div className="lg:w-2/6 w-full">
      <h2 className="font-bold text-blue-600 text-lg mb-4">
        <i className="w-[30px] fa-regular fa-calendar"></i> Selecione a Data
      </h2>
      <input
        type="date"
        id="date-picker"
        className="text-blue-600 px-4 py-2 rounded-full focus-visible:outline-none w-full"
      />
    </div>
  );
}
