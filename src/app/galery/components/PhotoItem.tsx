import { photoListProperties } from "@/types/Photo";
import Image from "next/image";
import { FC, MouseEventHandler  } from "react";

interface PhotoProperties {
  photo: photoListProperties;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
}

export const PhotoItem: FC<PhotoProperties> = ({ photo, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer hover:opacity-80">
      <Image
        src={`/images/${photo.url}`}
        alt={photo.alt}
        width={500}
        height={500}
        className="object-cover w-full h-full rounded-lg"
      />
    </div>
  );
};
