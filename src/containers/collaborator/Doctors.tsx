import React from "react";
import { ButtonBack } from "../../components/ButtonBack";
import { BarChart } from "../charts/BarChart";

import faker from "faker";
import { LineChart } from "../charts/LineChart";
import { Link } from "react-router-dom";

// Data Line Chart
export const optionsLine = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labelsLine = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];

export const dataLine = {
  labelsLine,
  datasets: [
    {
      label: "Dataset 1",
      data: labelsLine.map(() =>
        faker.datatype.number({ min: -1000, max: 1000 })
      ),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labelsLine.map(() =>
        faker.datatype.number({ min: -1000, max: 1000 })
      ),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

// Data BarChart
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      color: "#fff",
    },
    title: {
      display: true,
      text: "Especialidades",
    },
  },
};

const labels = ["Ortopedista", "Dentista", "Pediatra"];

export const data = {
  labels,
  datasets: [
    {
      label: "Masculino",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Feminino",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const Doctors = () => {
  return (
    <div>
      <div className="flex w-full justify-between">
        <ButtonBack />
        <Link
          to="doctorCalendar"
          className="w-fit mt-4 flex items-center cursor-pointer hover:scale-105 text-sm text-white hover:shadow-blue-800/50 hover:bg-blue-800 hover:text-white bg-blue-600 px-4 py-2 rounded-full transition ease-in-out mb-4"
        >
          Calendário
        </Link>
      </div>
      <div className="flex w-full gap-4">
        <div className="w-2/4 bg-slate-100 shadow-xl rounded-xl p-4">
          <BarChart data={data} options={options} />
        </div>
        <div className="w-2/4 bg-slate-100 shadow-xl rounded-xl p-4">
          <LineChart data={dataLine} options={optionsLine} />
        </div>
      </div>
    </div>
  );
};
