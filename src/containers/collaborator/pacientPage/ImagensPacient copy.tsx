import React, { useState } from "react";

export const ImagensPacients = () => {
  const [selectedImages, setSelectedImages] = useState<any[]>([]);

  const onSelectedFile = (e: any) => {
    const selectedFiles = e.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImage) => previousImage.concat(imagesArray));
  };

  return (
    <>
      <div className="flex flex-col w-full min-h-[400px] p-8 bg-slate-100 shadow-xl rounded-lg text-gray-600 overflow-hidden">
        <div className="flex flex-col w-full min-h-[200px] justify-between mb-4">
          <label
            htmlFor="files"
            className="py-2 px-4 bg-blue-600 hover:bg-blue-800 text-white transition-all rounded-lg w-fit cursor-pointer"
          >
            {" "}
            + Adicione uma imagem
          </label>
          <input
            id="files"
            type="file"
            name="images"
            onChange={onSelectedFile}
            className="hidden"
            multiple
            accept="image/png, image/jpeg, image/webp"
          />
          {selectedImages.length > 0 ? (
            <>
              <div className="grid md:grid-cols-5 gap-4 grid-cols-2 mt-8 w-full">
                {selectedImages.map((image, index) => {
                  return (
                    <div key={image} className="relative">
                      <img
                        src={image}
                        className="z-0 min-h-[200px] max-w-full object-cover rounded-lg"
                      />
                      <button
                        className="absolute top-2 right-2 bg-white rounded-md w-[40px] h-[40px] z-30"
                        onClick={() =>
                          setSelectedImages(
                            selectedImages.filter((e) => e !== image)
                          )
                        }
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <h1 className="w-full text-center mx-auto text-xl font-semibold">
              Este paciente não possui arquivos
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

// import React, { useState, useEffect } from "react";

// // Material UI
// import { createTheme } from "@mui/material/styles";
// import { ptBR } from "@mui/x-data-grid";
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
// import { TextField } from "@mui/material";

// const style = {
//   position: "absolute" as "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: ["90%", "60%"],
//   bgcolor: "background.paper",
//   border: "0px solid #000",
//   boxShadow: 24,
//   p: 4,
//   borderRadius: ".5rem",
// };

// const theme = createTheme(
//   {
//     palette: {
//       primary: { main: "#1976d2" },
//     },
//   },
//   ptBR
// );

// export const ImagensPacients = () => {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const [selectedFile, setSelectedFile] = useState();
//   const [selectedFile2, setSelectedFile2] = useState();
//   const [selectedFile3, setSelectedFile3] = useState();
//   const [selectedFile4, setSelectedFile4] = useState();
//   const [preview, setPreview] = useState<string | undefined>("");

//   useEffect(() => {
//     if (!selectedFile) {
//       setPreview(undefined);
//       return;
//     }

//     const objectUrl = URL.createObjectURL(selectedFile);
//     setPreview(objectUrl);

//     // free memory when ever this component is unmounted
//     return () => URL.revokeObjectURL(objectUrl);
//   }, [selectedFile]);

//   const onSelectFile = (e: any) => {
//     if (!e.target.files || e.target.files.length === 0) {
//       setSelectedFile(undefined);
//       return;
//     }

//     // I've kept this example simple by using the first image instead of multiple
//     setSelectedFile(e.target.files[0]);
//   };

//   return (
//     <>
//       <div className="flex flex-col w-full min-h-[400px] p-8 bg-slate-100 shadow-xl rounded-lg text-gray-600 overflow-hidden">
//         <div className="flex w-full justify-between mb-4">
//           <button
//             onClick={handleOpen}
//             className="py-2 px-4 bg-blue-600 hover:bg-blue-800 text-white transition-all rounded-lg"
//           >
//             + Adicionar
//           </button>
//         </div>
//         {selectedFile ? (
//           <img
//             src={preview}
//             className="max-h-[200px] max-w-[200px] object-cover rounded-lg"
//           />
//         ) : (
//           <>
//             <h1 className="w-full text-center my-auto text-xl font-semibold">
//               Este paciente não possui arquivos
//             </h1>
//           </>
//         )}
//       </div>
//       <div>
//         <Modal
//           open={open}
//           onClose={handleClose}
//           aria-labelledby="modal-modal-title"
//           aria-describedby="modal-modal-description"
//         >
//           <Box sx={style}>
//             <div className="flex w-full items-center justify-between mb-4">
//               <h3 className="text-lg text-blue-600 font-bold">
//                 Adicionar Imagens
//               </h3>

//               <button onClick={handleClose}>
//                 <i className="fa-solid fa-square-xmark text-blue-600 hover:text-blue-700 text-4xl hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out"></i>
//               </button>
//             </div>
//             <div className="flex w-full gap-4">
//               <form action="">
//                 <div className="flex gap-4 w-full">
//                   <label className="flex flex-col px-6 py-4 text-base text-white w-full gap-2 font-medium bg-blue-600 cursor-pointer items-center justify-center rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out">
//                     {selectedFile ? (
//                       <>{selectedFile.name}</>
//                     ) : (
//                       "Selecione a foto"
//                     )}
//                     <TextField
//                       id="inputTag"
//                       type="file"
//                       onChange={onSelectFile}
//                       style={{ display: "none" }}
//                     />
//                   </label>
//                   <label className="flex flex-col px-6 py-4 text-base text-white w-full gap-2 font-medium bg-blue-600 cursor-pointer items-center justify-center rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out">
//                     {selectedFile2 ? (
//                       <>{selectedFile2.name}</>
//                     ) : (
//                       "Selecione a foto"
//                     )}
//                     <TextField
//                       id="inputTag"
//                       type="file"
//                       onChange={onSelectFile}
//                       style={{ display: "none" }}
//                     />
//                   </label>
//                   <label className="flex flex-col px-6 py-4 text-base text-white w-full gap-2 font-medium bg-blue-600 cursor-pointer items-center justify-center rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out">
//                     {selectedFile3 ? (
//                       <>{selectedFile3.name}</>
//                     ) : (
//                       "Selecione a foto"
//                     )}
//                     <TextField
//                       id="inputTag"
//                       type="file"
//                       onChange={onSelectFile}
//                       style={{ display: "none" }}
//                     />
//                   </label>
//                   <label className="flex flex-col px-6 py-4 text-base text-white w-full gap-2 font-medium bg-blue-600 cursor-pointer items-center justify-center rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out">
//                     {selectedFile4 ? (
//                       <>{selectedFile4.name}</>
//                     ) : (
//                       "Selecione a foto"
//                     )}
//                     <TextField
//                       id="inputTag"
//                       type="file"
//                       onChange={onSelectFile}
//                       style={{ display: "none" }}
//                     />
//                   </label>
//                 </div>
//               </form>
//             </div>
//           </Box>
//         </Modal>
//       </div>
//     </>
//   );
// };
