import React, { useRef, useState } from "react";

export const DocumentsPacient = () => {
  const fileInput = useRef(null);
  const [onFileSelect, setOnFileSelect] = useState();

  const handleFileInput = (event: { target: { files: any[] } }) => {
    // handle validations
    setOnFileSelect(event.target.files[0]);
  };

  return (
    <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
      <div className="flex flex-col justify-between w-full h-[300px] p-8 bg-slate-200 rounded-lg text-gray-600 overflow-hidden">
        <i className="fa-solid fa-ellipsis-vertical text-2xl text-right w-full cursor-pointer" />
        <div className="flex flex-col items-center w-full">
          <i className="fa-solid fa-file-contract text-7xl mb-5"></i>
          <h2 className="text-center">Contrato</h2>
        </div>
        <input
          id="files"
          type="file"
          // onChange={handleFileInput}
          className="hidden"
          multiple
          accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        />
        <label
          htmlFor="files"
          className="py-2 px-4 bg-blue-600 text-center hover:bg-blue-800 text-white transition-all rounded-lg cursor-pointer"
        >
          Novo
        </label>
      </div>
      <div className="flex flex-col justify-between w-full h-[300px] p-8 bg-slate-200 rounded-lg text-gray-600 overflow-hidden">
        <i className="fa-solid fa-ellipsis-vertical text-2xl text-right w-full cursor-pointer" />
        <div className="flex flex-col items-center w-full">
          <i className="fa-solid fa-file-prescription text-7xl mb-5"></i>
          <h2 className="text-center w-full">Receituário</h2>
        </div>
        <input
          id="files"
          type="file"
          // onChange={handleFileInput}
          className="hidden"
          multiple
          accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        />
        <label
          htmlFor="files"
          className="py-2 px-4 bg-blue-600 text-center hover:bg-blue-800 text-white transition-all rounded-lg cursor-pointer"
        >
          Novo
        </label>
      </div>
      <div className="flex flex-col justify-between w-full h-[300px] p-8 bg-slate-200 rounded-lg text-gray-600 overflow-hidden">
        <i className="fa-solid fa-ellipsis-vertical text-2xl text-right w-full cursor-pointer" />
        <div className="flex flex-col items-center w-full">
          <i className="fa-solid fa-file-signature text-7xl mb-5"></i>
          <h2 className="text-center w-full">Atestados</h2>
        </div>
        <input
          id="files"
          type="file"
          // onChange={handleFileInput}
          className="hidden"
          multiple
          accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        />
        <label
          htmlFor="files"
          className="py-2 px-4 bg-blue-600 text-center hover:bg-blue-800 text-white transition-all rounded-lg cursor-pointer"
        >
          Novo
        </label>
      </div>
      <div className="flex flex-col justify-between w-full h-[300px] p-8 bg-slate-200 rounded-lg text-gray-600 overflow-hidden">
        <i className="fa-solid fa-ellipsis-vertical text-2xl text-right w-full cursor-pointer" />
        <div className="flex flex-col items-center w-full">
          <i className="fa-solid fa-file-invoice text-7xl mb-5"></i>
          <h2 className="text-center w-full">Personalizado</h2>
        </div>
        <input
          id="files"
          type="file"
          // onChange={handleFileInput}
          className="hidden"
          multiple
          accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        />
        <label
          htmlFor="files"
          className="py-2 px-4 bg-blue-600 text-center hover:bg-blue-800 text-white transition-all rounded-lg cursor-pointer"
        >
          Novo
        </label>
      </div>
    </div>
  );
};
