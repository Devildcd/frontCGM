import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Distrito } from '../interfaces/distritos.interface';
import { Provincia } from '../interfaces/provincia.interface';

@Injectable({
  providedIn: 'root'
})
export class NomencladoresService {

  baseUrl: string = environment.baseUrlNomencladores;

  constructor( private http: HttpClient ) { }

  // ******Funciones para Provincias********
  getProvincias(): Observable<Provincia[]> {
    // const headers = new HttpHeaders({
    //   'Authorization': `Bearer ${localStorage.getItem('token')}`
    // });

    return this.http.get<Provincia[]>( `${this.baseUrl}/lista/provincia` );
  }


  getProvincia( id: number ): Observable<Provincia> {

    return this.http.get<Provincia>( `${this.baseUrl}/detalle/provincia/${id}` );
  }


  postProvincia( provincia: Provincia ): Observable<Provincia> {

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Provincia>( `${this.baseUrl}/crear/provincia/`, provincia );
  }


  putProvincia( id: number, provincia: Provincia ): Observable<Provincia> {

    return this.http.put<Provincia>( `${this.baseUrl}/editar/provincia/${id}/`, provincia );
  }


  deleteProvincia( id: number ): Observable<Provincia> {

    return this.http.delete<Provincia>( `${this.baseUrl}/eliminar/provincia/${id}/` );
  }


  // ******Funciones para Municipios********
  getDistritos(): Observable<Distrito[]> {

    return this.http.get<Distrito[]>( `${this.baseUrl}/lista/distrito/` );
  }


  getDistrito( id:number ): Observable<Distrito> {

    return this.http.get<Distrito>( `${this.baseUrl}/lista/distrito/${id}`  );
  }


  postDistrito( distrito: Distrito ): Observable<Distrito> {

    return this.http.post<Distrito>( `${this.baseUrl}/crear/distrito/`, distrito );
  }


  putDistrito( id: number, distrito: Distrito ): Observable<Distrito> {

    return this.http.put<Distrito>( `${this.baseUrl}/editar/distrito/${id}/`, distrito );
  }
  

  deleteDistrito( id:number ): Observable<Distrito> {

    return this.http.delete<Distrito>( `${this.baseUrl}/eliminar/distrito/${id}/` );
  }

}
