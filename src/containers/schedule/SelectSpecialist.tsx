import React, { useState } from "react";

export function SelectSpecialist() {
  const [areaSelected, setAreaSelected] = useState([
    { id: 1, title: "Dermatologia", active: false },
    { id: 2, title: "Cardiologia", active: false },
    { id: 3, title: "Odontologia", active: false },
    { id: 4, title: "Pediatria", active: false },
    { id: 5, title: "Fonodiólogo", active: false },
    { id: 6, title: "Psiquiatria", active: false },
    { id: 7, title: "Nutricionista", active: false },
    { id: 8, title: "Neurologia", active: false },
  ]);

  function toggleSetected() {}

  return (
    <div>
      <h2 className="font-bold text-blue-600 text-lg mb-4">
        <i className="w-[30px] fa-solid fa-stethoscope"></i> Área de Atuação
      </h2>
      <div className="grid md:grid-cols-5 grid-cols-1 gap-2">
        {areaSelected.map((item) => (
          <button
            key={item.id}
            className={
              item.active
                ? "bg-blue-500"
                : "py-2 px-4 outline outline-2 outline-blue-800 rounded-full hover:bg-blue-800 hover:text-white transition-all"
            }
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
}
