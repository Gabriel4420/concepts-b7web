import { GeometryForm } from "./Geometry";

interface AllGeoFormProps {
  title?: string;
}
export const AllGeoForm: React.FC<AllGeoFormProps> = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h2 className="font-bold text-4xl text-center text-emerald-500 py-5">
        {title ? title : "Formas Geométricas"}
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-1 items-center mx-auto">
        <GeometryForm text="Isto é um circulo" type="Circle" />
        <GeometryForm text="Isto é um Quadrado" type="Square" />
        <GeometryForm text="Isto é um Quadrado" type="Square" />
      </div>
    </div>
  );
};
