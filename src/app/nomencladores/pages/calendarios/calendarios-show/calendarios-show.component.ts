import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Calendario } from 'src/app/nomencladores/interfaces/calendario.interface';
import { NomencladoresService } from 'src/app/nomencladores/services/nomencladores.service';

@Component({
  selector: 'app-calendarios-show',
  templateUrl: './calendarios-show.component.html',
  styleUrls: ['./calendarios-show.component.css']
})
export class CalendariosShowComponent {


  calendario!: Calendario;
  loading = true;

  constructor( 
    private nomencladoresService: NomencladoresService, 
    private activeRoute: ActivatedRoute,
     private fb: FormBuilder, ) {}

  ngOnInit() {

    this.activeRoute.params
      .pipe(
        switchMap(({ id }) => this.nomencladoresService.getCalendario( id ))
      )
      .subscribe((calendario) => {
        this.calendario = calendario;
        this.loading = false;
        console.log( calendario );

        this.formEditar.patchValue({ ...calendario });
      });
  }

  formEditar: FormGroup = this.fb.group({
    descripcion: [''],
    activo: [true],
  });
}
