import { useState } from "react";
import { TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  {
    field: "units",
    headerClassName: "super-app-theme--header",
    headerName: "Unidades",
    align: "left",
    headerAlign: "left",
    width: 180,
    type: "number",
  },
  {
    field: "material",
    headerName: "Material",
    align: "left",
    headerAlign: "left",
    width: 200,
  },
  {
    field: "min",
    headerClassName: "super-app-theme--header",
    headerName: "Mínimo",
    align: "left",
    headerAlign: "left",
    width: 180,
    type: "number",
  },
  {
    field: "max",
    headerClassName: "super-app-theme--header",
    headerName: "Máximo",
    align: "left",
    headerAlign: "left",
    width: 180,
    type: "number",
  },
  {
    field: "price",
    headerClassName: "super-app-theme--header",
    headerName: "Preço Unitário",
    align: "left",
    headerAlign: "left",
    width: 180,
    type: "number",
  },
  {
    field: "actions",
    headerName: "Deletar",
    width: 90,
    align: "left",
    description: "Clique no botão para editar as informações do paciente.",
    renderCell: (params) => {
      return (
        <button className="flex gap-2 items-center justify-center w-[30px] h-[30px] text-sm text-white lowercase bg-gray-500 rounded-lg hover:bg-blue-700 cursor-pointer transition-all">
          <i className="fa-solid fa-trash"></i>
        </button>
      );
    },
  },
];

export const MaterialKit = () => {
  const [inputFields, setInputFields] = useState<any[]>([]);

  const [units, setUnits] = useState("");
  const [material, setMaterial] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [price, setPrice] = useState("");

  const handleUnits = (event: any) => {
    setUnits(event.target.value as string);
  };

  const handleMaterial = (event: any) => {
    setMaterial(event.target.value as string);
  };

  const handleMin = (event: any) => {
    setMin(event.target.value as string);
  };

  const handleMax = (event: any) => {
    setMax(event.target.value as string);
  };

  const handlePrice = (event: any) => {
    setPrice(event.target.value as string);
  };

  //Handle Submit
  const handleSubmit = () => {
    setInputFields([
      ...inputFields,
      {
        id: inputFields.length + 1,
        units,
        material,
        min,
        max,
        price,
      },
    ]);
    console.log(inputFields);
  };

  return (
    <div className="border-2 border-gray-300 rounded-lg mt-4 overflow-hidden">
      <h1 className="text-base font-semibold bg-gray-300 p-4 mb-4">
        Kit de Materiais
      </h1>
      <form className="w-full">
        <div className="flex md:flex-row flex-col w-full justify-between gap-2 px-4">
          <TextField
            label="Quantidade"
            variant="outlined"
            value={units}
            onChange={(event) => handleUnits(event)}
            className="w-full"
            type="number"
          />

          <TextField
            label="Material"
            variant="outlined"
            value={material}
            onChange={(event) => handleMaterial(event)}
            className="w-full"
          />

          <TextField
            label="Mínimo"
            variant="outlined"
            value={min}
            onChange={(event) => handleMin(event)}
            className="w-full"
            type="number"
          />

          <TextField
            label="Máximo"
            variant="outlined"
            value={max}
            onChange={(event) => handleMax(event)}
            className="w-full"
            type="number"
          />

          <TextField
            label="Preço Unitário"
            variant="outlined"
            value={price}
            onChange={(event) => handlePrice(event)}
            className="w-full"
            type="number"
          />

          <span
            onClick={handleSubmit}
            className="flex bg-blue-600 text-white text-base min-w-[55px] min-h-[55px] text-center justify-center items-center rounded-md transition-all hover:bg-blue-800 cursor-pointer"
          >
            <i className="fa-solid fa-plus"></i>
          </span>
        </div>
      </form>
      <div className="w-full h-[300px] mt-8 px-4 py-4">
        <DataGrid
          rows={inputFields}
          columns={columns}
          pagination={true}
          autoHeight={true}
          pageSizeOptions={[7]}
        />
      </div>
    </div>
  );
};
