import React from "react";

// Material UI
import Box from "@mui/material/Box";

export const ModalPopUp = () => {
  return (
    <Box
      sx={{
        position: "absolute" as "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "justify-between",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: ["90%", "70%"],
        minHeight: "500px",
        bgcolor: "background.paper",
        border: "0px solid #000",
        boxShadow: 24,
        p: 4,
        borderRadius: ".5rem",
      }}
    >
      <div className="flex w-full items-center justify-between mb-4">
        <h3 className="text-lg text-blue-600 font-bold">Nova Anamnese</h3>

        <button
        //   onClick={handleClose}
        >
          <i className="fa-solid fa-square-xmark text-blue-600 hover:text-blue-700 text-4xl hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out"></i>
        </button>
      </div>
    </Box>
  );
};
