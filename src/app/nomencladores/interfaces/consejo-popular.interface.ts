import { Distrito } from "./distritos.interface";
import { Municipio } from "./municipio.interfaces";

export interface ConsejoPopular {
    id?: number,
    id_cpopular: string,
    nombre: string,
    activo: boolean,
    occm: any,
    municipio_id: Municipio,
    distrito_id: Distrito
}