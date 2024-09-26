import { AllGeoForm } from "@/components/AllGeoforms";
import { GeometryForm } from "@/components/Geometry";

function Page() {
  return (
    <div className="p-2 flex flex-col gap-5">
      <h1 className="text-black font-bold">Olá mundo</h1>
      <GeometryForm type="Square" text="Texto Qualquer" />
      <AllGeoForm />
    </div>
  );
}

export default Page;
