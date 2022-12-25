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
      <div className="flex flex-col w-full min-h-[200px] mb-4">
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
          <h1 className="w-full text-center m-auto text-xl font-semibold">
            Este paciente não possui arquivos
          </h1>
        )}
      </div>
    </>
  );
};
