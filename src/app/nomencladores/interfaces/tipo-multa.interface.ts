import { DecretoLey } from "./decreto-ley.interface";

export interface TipoMulta {
    id?: number,
    descipcion: string,
    duplica: boolean,
    apremia: boolean,
    gestiona: boolean,
    activo: boolean
}