import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Provincia } from '../interfaces/provincia.interface';
import { Municipio } from '../interfaces/municipio.interfaces';
import { Zona } from '../interfaces/zona.interface';
import { Distrito } from '../interfaces/distritos.interface';
import { ConsejoPopular } from '../interfaces/consejo-popular.interface';
import { Calle } from '../interfaces/calles.interface';
import { Calendario } from '../interfaces/calendario.interface';
import { tipoOficina } from '../interfaces/tipo-oficina.interface';
import { OCCM } from '../interfaces/occm.interface';

@Injectable({
  providedIn: 'root'
})
export class NomencladoresService {

  baseUrl: string = environment.baseUrlNomencladores;

  constructor(private http: HttpClient) { }


  // ******Funciones para Provincias********
  getProvincias(): Observable<Provincia[]> {
    // const headers = new HttpHeaders({
    //   'Authorization': `Bearer ${localStorage.getItem('token')}`
    // });

    return this.http.get<Provincia[]>(`${this.baseUrl}/lista/provincia`);
  }


  getProvincia(id: number): Observable<Provincia> {

    return this.http.get<Provincia>(`${this.baseUrl}/detalle/provincia/${id}`);
  }


  postProvincia(provincia: Provincia): Observable<Provincia> {
    return this.http.post<Provincia>(`${this.baseUrl}/crear/provincia/`, provincia);
  }


  putProvincia(id: number, provincia: Provincia): Observable<Provincia> {

    return this.http.put<Provincia>(`${this.baseUrl}/editar/provincia/${id}/`, provincia);
  }


  deleteProvincia(id: number): Observable<Provincia> {

    return this.http.delete<Provincia>(`${this.baseUrl}/eliminar/provincia/${id}/`);
  }


  // ******Funciones para Municipio********

  // Realiza la solicitud para obtener la lista de municipios
  getMunicipios(): Observable<Municipio[]> {
    return this.http.get<Municipio[]>(`${this.baseUrl}/lista/municipio`);
  }

  getMunicipio(id: number): Observable<Municipio> {

    return this.http.get<Municipio>(`${this.baseUrl}/detalle/municipio/${id}`);
  }

  // Crear Municipio
  postMunicipio(municipio: Municipio): Observable<Municipio> {
    return this.http.post<Municipio>(`${this.baseUrl}/crear/municipio/`, municipio);
  }

  // Editar Municipio
  putMunicipio(id: number, municipio: Municipio): Observable<Municipio> {

    return this.http.put<Municipio>(`${this.baseUrl}/editar/municipio/${id}/`, municipio);
  }

  //Eliminar Municipio
  deleteMunicipio(id: number): Observable<Municipio> {

    return this.http.delete<Municipio>(`${this.baseUrl}/eliminar/municipio/${id}/`);
  }





  // ******Funciones para Zonas********
  getZonas(): Observable<Zona[]> {
    return this.http.get<Zona[]>(`${this.baseUrl}/lista/zona`);
  }

  getZona(id: number): Observable<Zona> {

    return this.http.get<Zona>(`${this.baseUrl}/detalle/zona/${id}`);
  }

  postZona(zona: Zona): Observable<Zona> {
    return this.http.post<Zona>(`${this.baseUrl}/crear/zona/`, zona);
  }

  putZona(id: number, zona: Zona): Observable<Zona> {

    return this.http.put<Zona>(`${this.baseUrl}/editar/zona/${id}/`, zona);
  }

  deleteZona(id: number): Observable<Zona> {

    return this.http.delete<Zona>(`${this.baseUrl}/eliminar/zona/${id}/`);
  }


  // ******Funciones para Distritos********
  getDistritos(): Observable<Distrito[]> {

    return this.http.get<Distrito[]>(`${this.baseUrl}/lista/distrito/`);
  }


  getDistrito(id: number): Observable<Distrito> {

    return this.http.get<Distrito>(`${this.baseUrl}/detalle/distrito/${id}/`);
  }


  postDistrito(distrito: Distrito): Observable<Distrito> {

    return this.http.post<Distrito>(`${this.baseUrl}/crear/distrito/`, distrito);
  }


  putDistrito(id: number, distrito: Distrito): Observable<Distrito> {

    return this.http.put<Distrito>(`${this.baseUrl}/editar/distrito/${id}/`, distrito);
  }


  deleteDistrito(id: number): Observable<Distrito> {

    return this.http.delete<Distrito>(`${this.baseUrl}/eliminar/distrito/${id}/`);
  }


  // ******Funciones para Consejos Populares********
  getConsejoPopulares(): Observable<ConsejoPopular[]> {

    return this.http.get<ConsejoPopular[]>(`${this.baseUrl}/lista/cpopular/`);
  }


  getConsejoPopular(id: number): Observable<ConsejoPopular> {

    return this.http.get<ConsejoPopular>(`${this.baseUrl}/detalle/cpopular/${id}/`);
  }


  postConsejoPopular(cpopular: ConsejoPopular): Observable<ConsejoPopular> {

    return this.http.post<ConsejoPopular>(`${this.baseUrl}/crear/cpopular/`, cpopular);
  }


  putConsejoPopular(id: number, cpopular: ConsejoPopular): Observable<ConsejoPopular> {

    return this.http.put<ConsejoPopular>(`${this.baseUrl}/editar/cpopular/${id}/`, cpopular);
  }


  deleteConsejoPopular(id: number): Observable<ConsejoPopular> {

    return this.http.delete<ConsejoPopular>(`${this.baseUrl}/eliminar/cpopular/${id}/`);
  }


  // ******Funciones para Calles********
  getCalles(): Observable<Calle[]> {

    return this.http.get<Calle[]>(`${this.baseUrl}/lista/calle/`);
  }


  getCalle(id: number): Observable<Calle> {

    return this.http.get<Calle>(`${this.baseUrl}/detalle/calle/${id}/`);
  }


  postCalle(calle: Calle): Observable<Calle> {

    return this.http.post<Calle>(`${this.baseUrl}/crear/calle/`, calle);
  }


  putCalle(id: number, calle: ConsejoPopular): Observable<Calle> {

    return this.http.put<Calle>(`${this.baseUrl}/editar/calle/${id}/`, calle);
  }


  deleteCalle(id: number): Observable<Calle> {

    return this.http.delete<Calle>(`${this.baseUrl}/eliminar/calle/${id}/`);
  }


  // ******Funciones para Calendarios********
  getCalendarios(): Observable<Calendario[]> {

    return this.http.get<Calendario[]>(`${this.baseUrl}/lista/tipoCalendario/`);
  }


  getCalendario(id: number): Observable<Calendario> {

    return this.http.get<Calendario>(`${this.baseUrl}/detalle/tipoCalendario/${id}/`);
  }


  postCalendario(calendario: Calendario): Observable<Calendario> {

    return this.http.post<Calendario>(`${this.baseUrl}/crear/tipoCalendario/`, calendario);
  }


  putCalendario(id: number, calendario: Calendario): Observable<Calendario> {

    return this.http.put<Calendario>(`${this.baseUrl}/editar/tipoCalendario/${id}/`, calendario);
  }


  deleteCalendario(id: number): Observable<Calendario> {

    return this.http.delete<Calendario>(`${this.baseUrl}/eliminar/tipoCalendario/${id}/`);
  }

  // ******Funciones para Tipo de Oficinas********
  gettipoOficinas(): Observable<tipoOficina[]> {

    return this.http.get<tipoOficina[]>(`${this.baseUrl}/lista/tipoOficina/`);
  }


  gettipoOficina(id: number): Observable<tipoOficina> {

    return this.http.get<tipoOficina>(`${this.baseUrl}/detalle/tipoOficina/${id}/`);
  }


  posttipoOficina(oficina: tipoOficina): Observable<tipoOficina> {

    return this.http.post<tipoOficina>(`${this.baseUrl}/crear/tipoOficina/`, oficina);
  }


  puttipoOficina(id: number, oficina: tipoOficina): Observable<Calendario> {

    return this.http.put<tipoOficina>(`${this.baseUrl}/editar/tipoOficina/${id}/`, oficina);
  }


  deletetipoOficina(id: number): Observable<tipoOficina> {

    return this.http.delete<tipoOficina>(`${this.baseUrl}/eliminar/tipoOficina/${id}/`);
  }

  // ******Funciones para OCCM********
  getOCCMS(): Observable<OCCM[]> {

    return this.http.get<OCCM[]>(`${this.baseUrl}/lista/occm/`);
  }


  getOCCM(id: number): Observable<OCCM> {

    return this.http.get<OCCM>(`${this.baseUrl}/detalle/occm/${id}/`);
  }


  postOCCM(occm: OCCM): Observable<OCCM> {

    return this.http.post<OCCM>(`${this.baseUrl}/crear/occm/`, occm);
  }


  putOCCM(id: number, occm: OCCM): Observable<Calendario> {

    return this.http.put<OCCM>(`${this.baseUrl}/editar/occm/${id}/`, occm);
  }


  deleteOCCM(id: number): Observable<OCCM> {

    return this.http.delete<OCCM>(`${this.baseUrl}/eliminar/occm/${id}/`);
  }

}
