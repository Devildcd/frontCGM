import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor( public authService: AuthService, private router: Router ) {}

  // ngOnInit() {
   
  //   const usuario = localStorage.getItem('usuario');
  //   if (usuario) {
  //     const usuarioObj = JSON.parse(usuario);
  //     this.authService.usuario = {
  //       user: usuarioObj,
  //     };
  //   }
  // console.log(this.authService.usuario?.user);
    
  // }

  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //   .pipe(
  //     map(result => result.matches),
  //     shareReplay()
  //   );

  // constructor(private breakpointObserver: BreakpointObserver,
  //             private router: Router
  //   ) { }

  compProv(){
    this.router.navigate(['divisiones/provincia']);
  }

  compMunicipio(){
    this.router.navigate(['divisiones/municipio']);
  }

  compDistritos(){
    this.router.navigate(['divisiones/distritos']);
  }

  compConsejPopulares(){
    this.router.navigate(['divisiones/consejos-populares']);
  }

  compCalles(){
    this.router.navigate(['divisiones/calles']);
  }

  compTiposOficina(){
    this.router.navigate(['divisiones/tipos-oficinas']);
  }

  compOCCM(){
    this.router.navigate(['divisiones/occm']);
  }

  compOrganismos(){
    this.router.navigate(['divisiones/organismos']);
  }
  
}
