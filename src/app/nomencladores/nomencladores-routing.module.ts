import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProvinciasComponent } from './pages/provincias/provincias.component';
import { ProvinciaCreateComponent } from './pages/provincias/provincia-create/provincia-create.component';
import { ProvinciaEditComponent } from './pages/provincias/provincia-edit/provincia-edit.component';
import { MunicipiosComponent } from './pages/municipios/municipios.component';
import { MunicipioCreateComponent } from './pages/municipios/municipio-create/municipio-create.component';
import { MunicipioEditComponent } from './pages/municipios/municipio-edit/municipio-edit.component';
import { DistritosComponent } from './pages/distritos/distritos.component';
import { ConsejosPopularesComponent } from './pages/consejos-populares/consejos-populares.component';
import { CallesComponent } from './pages/calles/calles.component';
import { CalleCreateComponent } from './pages/calles/calle-create/calle-create.component';
import { CalleEditComponent } from './pages/calles/calle-edit/calle-edit.component';
import { TiposOficinasComponent } from './pages/tipos-oficinas/tipos-oficinas.component';
import { TipoOficinaCreateComponent } from './pages/tipos-oficinas/tipo-oficina-create/tipo-oficina-create.component';
import { TipoOficinaEditComponent } from './pages/tipos-oficinas/tipo-oficina-edit/tipo-oficina-edit.component';
import { OccmComponent } from './pages/occm/occm.component';
import { OccmCreateComponent } from './pages/occm/occm-create/occm-create.component';
import { OccmEditComponent } from './pages/occm/occm-edit/occm-edit.component';
import { OrganismosComponent } from './pages/organismos/organismos.component';
import { OrganismoCreateComponent } from './pages/organismos/organismo-create/organismo-create.component';
import { OrganismoEditComponent } from './pages/organismos/organismo-edit/organismo-edit.component';
import { DistritoCreateComponent } from './pages/distritos/distrito-create/distrito-create.component';
import { DistritoEditComponent } from './pages/distritos/distrito-edit/distrito-edit.component';
import { ConsejoPopularCreateComponent } from './pages/consejos-populares/consejo-popular-create/consejo-popular-create.component';
import { ConsejoPopularEditComponent } from './pages/consejos-populares/consejo-popular-edit/consejo-popular-edit.component';
import { HomeComponent } from './pages/home/home.component';
import { ProvinciaShowComponent } from './pages/provincias/provincia-show/provincia-show.component';
import { DistritoShowComponent } from './pages/distritos/distrito-show/distrito-show.component';
import { ConsejoPopularShowComponent } from './pages/consejos-populares/consejo-popular-show/consejo-popular-show.component';
import { MunicipioShowComponent } from './pages/municipios/municipio-show/municipio-show.component';
import { CalleShowComponent } from './pages/calles/calle-show/calle-show.component';
import { TipoOficinaShowComponent } from './pages/tipos-oficinas/tipo-oficina-show/tipo-oficina-show.component';
import { OccmShowComponent } from './pages/occm/occm-show/occm-show.component';
import { OrganismoShowComponent } from './pages/organismos/organismo-show/organismo-show.component';

import { ZonaCreateComponent } from './pages/zonas/zona-create/zona-create.component';
import { ZonaEditComponent } from './pages/zonas/zona-edit/zona-edit.component';
import { ZonaShowComponent } from './pages/zonas/zona-show/zona-show.component';
import { ZonasComponent } from './pages/zonas/zonas.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    children: [
       
  //****** Nomencladores******// 
  // provincias
  {
    path:'divisiones/provincias',
    component: ProvinciasComponent
  },
  {
    path:'divisiones/crear/provincia',
    component: ProvinciaCreateComponent
  },
  {
    path:'divisiones/editar/provincia/:id',
    component: ProvinciaEditComponent
  },
  {
    path:'divisiones/detalles/provincia/:id',
    component: ProvinciaShowComponent
  },

  // municipios
  {
    path:'divisiones/municipios',
    component: MunicipiosComponent
  },
  {
    path:'divisiones/crear/municipio',
    component: MunicipioCreateComponent
  },
  {
    path:'divisiones/editar/municipio/:id',
    component: MunicipioEditComponent
  },
  {
    path: 'divisiones/detalles/municipio/:id',
    component: MunicipioShowComponent
  },

  // distritos
  {
    path:'divisiones/distritos',
    component: DistritosComponent
  },
  {
    path:'divisiones/crear/distrito',
    component: DistritoCreateComponent
  },
  {
    path:'divisiones/editar/distrito/:id',
    component: DistritoEditComponent
  },
  {
    path: 'divisiones/detalles/distrito/:id',
    component: DistritoShowComponent
  },

  // consejos-populares
  {
    path:'divisiones/consejos-populares',
    component: ConsejosPopularesComponent
  },
  {
    path:'divisiones/crear/consejo-popular',
    component: ConsejoPopularCreateComponent
  },
  {
    path:'divisiones/editar/consejo-popular/:id',
    component: ConsejoPopularEditComponent
  },
  {
    path: 'divisiones/detalles/consejo-popular/:id',
    component: ConsejoPopularShowComponent
  },

  // calles
  {
    path:'divisiones/calles',
    component: CallesComponent
  },
  {
    path:'divisiones/crear/calle',
    component: CalleCreateComponent
  },
  {
    path:'divisiones/editar/calle/:id',
    component: CalleEditComponent
  },
  {
    path:'divisiones/detalles/calle/:id',
    component: CalleShowComponent
  },

  // tipos-oficinas
  {
    path:'divisiones/tipos-oficinas',
    component: TiposOficinasComponent
  },
  {
    path:'divisiones/crear/tipo-oficina',
    component: TipoOficinaCreateComponent
  },
  {
    path:'divisiones/editar/tipo-oficina/:id',
    component: TipoOficinaEditComponent
  },
  {
    path:'divisiones/detalles/tipo-oficina/:id',
    component: TipoOficinaShowComponent
  },

  // occm
  {
    path:'divisiones/occm',
    component: OccmComponent
  },
  {
    path:'divisiones/crear/occm',
    component: OccmCreateComponent
  },
  {
    path:'divisiones/editar/occm/:id',
    component: OccmEditComponent
  },
  {
    path:'divisiones/detalles/occm/:id',
    component: OccmShowComponent
  },

  // organismos
  {
    path:'divisiones/organismos',
    component: OrganismosComponent
  },
  {
    path:'divisiones/crear/organismo',
    component: OrganismoCreateComponent
  },
  {
    path:'divisiones/editar/organismo/:id',
    component: OrganismoEditComponent
  },
  {
    path:'divisiones/detalles/organismo/:id',
    component: OrganismoShowComponent
  },

  // zonas
  {
    path: 'divisiones/zonas', component: ZonasComponent
  },
  {
    path: 'divisiones/crear/zona', component: ZonaCreateComponent
  },
  {
    path: 'divisiones/editar/zona', component: ZonaEditComponent
  },
  {
    path: 'divisiones/detalles/zona', component: ZonaShowComponent
  },
  // rutas Operaciones
  // {
  //   path:'operaciones/duplicados', component: DuplicarComponent
  // },
  // {
  //   path:'operaciones/crear/duplicado', component: AddDuplicadoComponent
  // },
  // {
  //   path:'operaciones/editar/duplicado/:id', component: UpdateDuplicadoComponent
  // },
  // {
  //   path:'operaciones/duplicados-vista-tarjetas', component: CardsListDuplicadosComponent
  // },
  {
    path:'**',
    pathMatch: 'full',
    redirectTo:'divisiones/provincias'
  }
    ]

  }
 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ]
})
export class NomencladoresRoutingModule { }
