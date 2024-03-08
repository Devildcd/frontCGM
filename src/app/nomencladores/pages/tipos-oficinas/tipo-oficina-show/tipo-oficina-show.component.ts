import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { tipoOficina } from 'src/app/nomencladores/interfaces/tipo-oficina.interface';
import { NomencladoresService } from 'src/app/nomencladores/services/nomencladores.service';

@Component({
  selector: 'app-tipo-oficina-show',
  templateUrl: './tipo-oficina-show.component.html',
  styleUrls: ['./tipo-oficina-show.component.css']
})
export class TipoOficinaShowComponent {

  tipoOficina!: tipoOficina;
  loading = true;

  constructor( 
    private nomencladoresService: NomencladoresService, 
    private activeRoute: ActivatedRoute, 
    private fb: FormBuilder, ) {}

  ngOnInit() {

    this.activeRoute.params
      .pipe(
        switchMap(({ id }) => this.nomencladoresService.gettipoOficina( id ))
      )
      .subscribe((tipoOficina) => {
        this.tipoOficina = tipoOficina;
        this.loading = false;
        console.log( tipoOficina );

        this.formEditar.patchValue({ ...tipoOficina });
      });
  }

  formEditar: FormGroup = this.fb.group({
    identificador: [''],
    descripcion: [''],
    activo: [true],
  });

}
