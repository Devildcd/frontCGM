import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Distrito } from 'src/app/nomencladores/interfaces/distritos.interface';
import { NomencladoresService } from 'src/app/nomencladores/services/nomencladores.service';

@Component({
  selector: 'app-distrito-show',
  templateUrl: './distrito-show.component.html',
  styleUrls: ['./distrito-show.component.css'],
})
export class DistritoShowComponent {
  distrito!: Distrito;
  loading = true;

  constructor(
    private nomencladoresService: NomencladoresService,
    private activeRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.activeRoute.params
      .pipe(switchMap(({ id }) => this.nomencladoresService.getDistrito(id)))
      .subscribe((distrito) => {
        this.distrito = distrito;
        this.loading = false;
        console.log(distrito);

        this.formEditar.patchValue({ 
            id_distrito: distrito.id_distrito,
            nombre: distrito.nombre,
            activo: distrito.activo,
            municipio_id: distrito.municipio_id.nombre    
         });
      });
  }

  formEditar: FormGroup = this.fb.group({
    id_distrito: [''],
    nombre: [''],
    activo: [true],
    municipio_id: [0]
  });
}
