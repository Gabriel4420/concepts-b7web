"use client";

import { photoList } from "@/helper/photoList";
import React, { useState } from "react";
import { PhotoItem } from "./components/PhotoItem";
import { Modal } from "./components/Modal";

const Galery: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState({ url: "", alt: "" });

  const openModal = (id: number) => {
    const photo = photoList.find((i) => i.id === id);
    photo &&
      (setModalImage({ url: photo.url, alt: photo.alt }),
      setShowModal(!showModal));
  }

  return (
    <div className="bg-galaxia w-full h-auto md:h-screen bg-cover bg-center ">
      <div className="px-4 w-full z-10 flex flex-col items-center justify-center">
        <h1 className="font-bold text-6xl py-10 lg:py-0 text-center text-white">
          Fotos Intergalaticas
        </h1>

        <section className="container max-w-5xl py-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[30%_20%_40%_10%] gap-8">
          {photoList.map((item, _index) => {
            return (
              <PhotoItem
                key={item.id.toString()}
                photo={item}
                onClick={() => openModal(item.id)}
              />
            );
          })}
        </section>

        {showModal && (
          <Modal
            image={modalImage.url}
            alt={modalImage.alt}
            closeModal={() => setShowModal(!showModal)}
          />
        )}
      </div>
    </div>
  );
};

export default Galery;
