"use client";

import Image from "next/image";
import { FC } from "react";
import { FiXCircle } from "react-icons/fi";

interface Modalprops {
  image: string;
  closeModal: () => void;
  alt: string;
}

export const Modal: FC<Modalprops> = ({ image, alt, closeModal }) => {
  return (
    <div onClick={closeModal}>
      <div className="fixed left-0 top-0 bottom-0 w-full flex justify-center items-center bg-black/90">
        <Image
          src={`/images/${image}`}
          alt={alt}
          height={768}
          width={1024}
          className="max-w-screen max-h-screen"
        />
      </div>
      <div className="fixed top-5 right-5 w-10 h-10 bg-red-700 flex items-center justify-center cursor-pointer text-5xl rounded-full">
        <FiXCircle size={28} className=" text-white"/>
      </div>
    </div>
  );
};
