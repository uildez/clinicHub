import React from "react";

export function SelectedLocation() {
  return (
    <div className="lg:w-4/6 w-full">
      <h2 className="font-bold text-blue-600 text-lg mb-4">
        <i className="w-[30px] fa-solid fa-location-dot"></i>
        Selecione a Localização:
      </h2>
      <select
        name="locations"
        id="locations"
        className="text-blue-600 w-full px-4 py-2 rounded-full focus-visible:outline-none"
      >
        <option value="Endereço 1">
          Clínica HUB Sul João Pessoa - 0 km | 11 vagas
        </option>
        <option value="Endereço 2">
          Clínica HUB Norte João Pessoa - 12 km | 8 vagas
        </option>
        <option value="Endereço 3">
          Clínica HUB Nordeste João Pessoa - 2 km | 4 vagas
        </option>
        <option value="Endereço 4">
          Clínica HUB Centro João Pessoa - 8 km | 3 vagas
        </option>
      </select>
    </div>
  );
}
