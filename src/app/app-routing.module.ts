import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarTokenGuard } from './auth/guards/validar-token.guard';

const routes: Routes = [
  // Lazy load
  // {
  //   path: 'auth',
  //   loadChildren: () => import( './auth/auth.module'). then( m => m.AuthModule )
  // },
  {
    path: 'nomencladores',
    loadChildren: () =>
      import('./nomencladores/nomencladores.module').then((m) => m.NomencladoresModule),
    // canActivate: [ValidarTokenGuard],
  },
  // {
  //   path: 'estudiantes',
  //   loadChildren: () => import( './estudiantes/estudiantes.module'). then( m => m.EstudiantesModule ),
  //   canActivate: [ValidarTokenGuard]
  // },
  // {
  //   path: 'asignaturas',
  //   loadChildren: () => import('./asignaturas/asignaturas.module').then( m => m.AsignaturasModule),
  //   canActivate: [ValidarTokenGuard]
  // },
  {
    path: '**', redirectTo: 'nomencladores'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
