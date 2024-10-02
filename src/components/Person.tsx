import { getToday } from "@/helper/format-date";
import { PersonAttributes } from "@/types/Person";
import Image from "next/image";
import { FC } from "react";
import { Card, CardDescription, CardHabilitiesList } from "./Card";

const Person: FC<PersonAttributes> = ({
  name,
  age,
  avatarPath,
  alt,
  habilities,
}: PersonAttributes) => {
  return (
    /* Fragment Root */
    <Card>
      <Image
        alt={alt}
        src={
          avatarPath
            ? avatarPath
            : "https://th.bing.com/th/id/OIP.joMVNcZZ-qeoxySqOH6XbAHaHa?rs=1&pid=ImgDetMain"
        }
        className="rounded-3xl mt-5"
        width="500"
        height="500"
      />
      <CardDescription name={name} age={age} />
      <CardHabilitiesList habilities={habilities} />
    </Card>
  );
};

export default Person;
