import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Calle } from 'src/app/nomencladores/interfaces/calles.interface';
import { NomencladoresService } from 'src/app/nomencladores/services/nomencladores.service';

@Component({
  selector: 'app-calle-show',
  templateUrl: './calle-show.component.html',
  styleUrls: ['./calle-show.component.css']
})
export class CalleShowComponent {

  calle!: Calle;
  loading = true;

  constructor( private nomencladoresService: NomencladoresService, private activeRoute: ActivatedRoute, private fb: FormBuilder, ) {}

  ngOnInit() {

    this.activeRoute.params
      .pipe(
        switchMap(({ id }) => this.nomencladoresService.getCalle( id ))
      )
      .subscribe((calle) => {
        this.calle = calle;
        this.loading = false;
        console.log( calle );

        this.formEditar.patchValue({ ...calle });
      });
  }

  formEditar: FormGroup = this.fb.group({
    id_calle: [''],
    activo: [true],
  });
}
