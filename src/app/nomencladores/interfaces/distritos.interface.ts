import { Municipio } from "./municipio.interfaces";

export interface Distrito {
    id?: number,
    id_distrito: string,
    nombre: string,
    activo: boolean,
    occm?: any,
    municipio_id: Municipio
}