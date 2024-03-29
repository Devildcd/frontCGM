import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { ConsejoPopular } from 'src/app/nomencladores/interfaces/consejo-popular.interface';
import { NomencladoresService } from 'src/app/nomencladores/services/nomencladores.service';

@Component({
  selector: 'app-consejo-popular-show',
  templateUrl: './consejo-popular-show.component.html',
  styleUrls: ['./consejo-popular-show.component.css']
})
export class ConsejoPopularShowComponent {

  cpopulares!: ConsejoPopular;
  loading = true;

  constructor( private nomencladoresService: NomencladoresService, private activeRoute: ActivatedRoute, private fb: FormBuilder, ) {}

  ngOnInit() {

    this.activeRoute.params
      .pipe(
        switchMap(({ id }) => this.nomencladoresService.getConsejoPopular( id ))
      )
      .subscribe((cpopulares) => {
        this.cpopulares = cpopulares;
        this.loading = false;
        console.log(  this.cpopulares );

        this.formEditar.patchValue({ 
          id_cpopular: cpopulares.id_cpopular,
          nombre: cpopulares.nombre,
          occm: cpopulares.occm?.id_occm,
          municipio_id: cpopulares.municipio_id.nombre,
          distrito_id: cpopulares.distrito_id.nombre
         });
      });
  }

  formEditar: FormGroup = this.fb.group({
    id_cpopular: [''],
    nombre: [''],
    occm: [''],
    municipio_id: [''],
    distrito_id: [''],
    activo: [true],
  });

}
