import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Habilities } from "./Habilities";

export interface PersonAttributes {
    name: string;
    lastname:string;
    age?: number;
    avatarPath?: string | StaticImport;
    alt: string;
    habilities?: Array<Habilities>;
}