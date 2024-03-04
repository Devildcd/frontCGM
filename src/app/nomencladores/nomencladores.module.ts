import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { NomencladoresRoutingModule } from './nomencladores-routing.module';
import { RouterModule } from '@angular/router';

import { ProvinciasComponent } from './pages/provincias/provincias.component';
import { ProvinciaCreateComponent } from './pages/provincias/provincia-create/provincia-create.component';
import { ProvinciaEditComponent } from './pages/provincias/provincia-edit/provincia-edit.component';
import { ProvinciaShowComponent } from './pages/provincias/provincia-show/provincia-show.component';
import { MunicipiosComponent } from './pages/municipios/municipios.component';
import { MunicipioCreateComponent } from './pages/municipios/municipio-create/municipio-create.component';
import { MunicipioEditComponent } from './pages/municipios/municipio-edit/municipio-edit.component';
import { MunicipioShowComponent } from './pages/municipios/municipio-show/municipio-show.component';
import { DistritosComponent } from './pages/distritos/distritos.component';
import { DistritoCreateComponent } from './pages/distritos/distrito-create/distrito-create.component';
import { DistritoEditComponent } from './pages/distritos/distrito-edit/distrito-edit.component';
import { DistritoShowComponent } from './pages/distritos/distrito-show/distrito-show.component';
import { ConsejosPopularesComponent } from './pages/consejos-populares/consejos-populares.component';
import { ConsejoPopularCreateComponent } from './pages/consejos-populares/consejo-popular-create/consejo-popular-create.component';
import { ConsejoPopularEditComponent } from './pages/consejos-populares/consejo-popular-edit/consejo-popular-edit.component';
import { ConsejoPopularShowComponent } from './pages/consejos-populares/consejo-popular-show/consejo-popular-show.component';
import { CallesComponent } from './pages/calles/calles.component';
import { CalleCreateComponent } from './pages/calles/calle-create/calle-create.component';
import { CalleEditComponent } from './pages/calles/calle-edit/calle-edit.component';
import { CalleShowComponent } from './pages/calles/calle-show/calle-show.component';
import { TiposOficinasComponent } from './pages/tipos-oficinas/tipos-oficinas.component';
import { TipoOficinaCreateComponent } from './pages/tipos-oficinas/tipo-oficina-create/tipo-oficina-create.component';
import { TipoOficinaEditComponent } from './pages/tipos-oficinas/tipo-oficina-edit/tipo-oficina-edit.component';
import { TipoOficinaShowComponent } from './pages/tipos-oficinas/tipo-oficina-show/tipo-oficina-show.component';
import { OccmComponent } from './pages/occm/occm.component';
import { OccmCreateComponent } from './pages/occm/occm-create/occm-create.component';
import { OccmEditComponent } from './pages/occm/occm-edit/occm-edit.component';
import { OccmShowComponent } from './pages/occm/occm-show/occm-show.component';
import { OrganismosComponent } from './pages/organismos/organismos.component';
import { OrganismoCreateComponent } from './pages/organismos/organismo-create/organismo-create.component';
import { OrganismoEditComponent } from './pages/organismos/organismo-edit/organismo-edit.component';
import { OrganismoShowComponent } from './pages/organismos/organismo-show/organismo-show.component';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ZonasComponent } from './pages/zonas/zonas.component';
import { ZonaShowComponent } from './pages/zonas/zona-show/zona-show.component';
import { ZonaEditComponent } from './pages/zonas/zona-edit/zona-edit.component';
import { ZonaCreateComponent } from './pages/zonas/zona-create/zona-create.component';



@NgModule({
  declarations: [
    ProvinciasComponent,
    ProvinciaCreateComponent,
    ProvinciaEditComponent,
    ProvinciaShowComponent,
    MunicipiosComponent,
    MunicipioCreateComponent,
    MunicipioEditComponent,
    MunicipioShowComponent,
    DistritosComponent,
    DistritoCreateComponent,
    DistritoEditComponent,
    DistritoShowComponent,
    ConsejosPopularesComponent,
    ConsejoPopularCreateComponent,
    ConsejoPopularEditComponent,
    ConsejoPopularShowComponent,
    CallesComponent,
    CalleCreateComponent,
    CalleEditComponent,
    CalleShowComponent,
    TiposOficinasComponent,
    TipoOficinaCreateComponent,
    TipoOficinaEditComponent,
    TipoOficinaShowComponent,
    OccmComponent,
    OccmCreateComponent,
    OccmEditComponent,
    OccmShowComponent,
    OrganismosComponent,
    OrganismoCreateComponent,
    OrganismoEditComponent,
    OrganismoShowComponent,
    HomeComponent,
    ZonasComponent,
    ZonaShowComponent,
    ZonaEditComponent,
    ZonaCreateComponent,
  
  ],
  imports: [
    CommonModule,
    NomencladoresRoutingModule,
    MaterialModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class NomencladoresModule { }
