import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { DecretoLey } from 'src/app/nomencladores/interfaces/decreto-ley.interface';
import { NomencladoresService } from 'src/app/nomencladores/services/nomencladores.service';

@Component({
  selector: 'app-decreto-ley-show',
  templateUrl: './decreto-ley-show.component.html',
  styleUrls: ['./decreto-ley-show.component.css'],
})
export class DecretoLeyShowComponent {
  decreto!: DecretoLey;
  loading = true;

  constructor(
    private nomencladoresService: NomencladoresService,
    private activeRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.activeRoute.params
      .pipe(switchMap(({ id }) => this.nomencladoresService.getDecreto(id)))
      .subscribe((decreto) => {
        this.decreto = decreto;
        this.loading = false;
        console.log(this.decreto);

        this.formEditar.patchValue({ 
          id_decreto_ley: decreto.id_decreto_ley,
          descripcion: decreto.descripcion,
          activo: decreto.activo,
         });
      });
  }

  formEditar: FormGroup = this.fb.group({
    id_decreto_ley: [''],
    descripcion: [''],
    activo: [true],
  });
}
