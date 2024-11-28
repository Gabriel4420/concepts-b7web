"use client";
import { useEffect, useState } from "react";
import { GeometryForm } from "./Geometry";

interface AllGeoFormProps {
  title?: string;
}
export const AllGeoForm: React.FC<AllGeoFormProps> = ({ title }) => {
  const [geoForms, setGeoForms] = useState([
    {
      content: <GeometryForm text="Isto é um circulo" type="Circle" />,
    },
    {
      content: <GeometryForm text="Isto é um Quadrado" type="Square" />,
    },
  ]);

  const escolha = (
    geoForms: {
      content: JSX.Element;
    }[]
  ) => {
    switch (geoForms.length) {
      case 1:
        "grid-cols-1";
        break;
      case 2:
        "grid-cols-2";
        break;
      case 3:
        "grid-cols-3";
        break;
      case 4:
        "grid-cols-4";
        break;
    }

    return geoForms.length
  };

  useEffect(() => {}, [geoForms]);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h2 className="font-bold text-4xl text-center text-emerald-500 py-5">
        {title ? title : "Formas Geométricas"}
      </h2>
      <div
        className={`grid sm:grid-cols-2 md:${() =>
          escolha(geoForms)}  gap-1 items-center mx-auto`}
      >
        {geoForms.map((x, index) => (
          <div key={index}>{x.content}</div>
        ))}
      </div>

      <button
        onClick={() =>
          setGeoForms([
            ...geoForms,
            {
              content: <GeometryForm text="Isto é um Quadrado" type="Square" />,
            },
          ])
        }
      >
        adicionar forma
      </button>
    </div>
  );
};
