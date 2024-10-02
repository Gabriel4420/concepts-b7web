import { AllGeoForm } from "@/components/AllGeoforms";
import { GeometryForm } from "@/components/Geometry";
import Person from "@/components/Person";
import { Habilities } from "@/helper/habilities";

function Page() {
  return (
    <div className="p-2 flex flex-col items-center justify-center gap-5">
      <h1 className="text-black font-bold">Olá mundo</h1>
      <GeometryForm type="Square" text="Texto Qualquer" />
      <AllGeoForm title="Formas" />
      <div className="grid md:grid-cols-3 sm:grid-cols-2 xs:gap-4 max-w-auto">
        <Person
          age={18}
          alt="Uma pessoa legal"
          avatarPath="https://avatars.githubusercontent.com/u/37821374?v=4"
          name="Gabriel Rodrigues Perez"
          habilities={Habilities}
        />
        <Person
          age={34}
          alt="Uma pessoa"
          name="Fernando Pontes"
          habilities={Habilities}
        />
        <Person
          age={58}
          alt="Uma pessoa"
          name="Agnaldo Pontes"
          habilities={Habilities}
        />
      </div>
    </div>
  );
}

export default Page;
