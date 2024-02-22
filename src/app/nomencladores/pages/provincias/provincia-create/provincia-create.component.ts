import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,  } from '@angular/forms';
import { Router } from '@angular/router';
import { Provincia } from 'src/app/nomencladores/interfaces/provincia.interface';
import { NomencladoresService } from 'src/app/nomencladores/services/nomencladores.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-provincia-create',
  templateUrl: './provincia-create.component.html',
  styleUrls: ['./provincia-create.component.css'],
})
export class ProvinciaCreateComponent {

  provincia!: Provincia;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private nomencladoresService: NomencladoresService,
    private router: Router
  ) {}

  formCrear: FormGroup = this.fb.group({
    id_provincia: ['', Validators.required],
    nombre: ['', Validators.required],
    activo: [true],
  });

  crearProvincia() {

    if (this.formCrear.invalid || this.formCrear.untouched) {
      // El formulario es inválido o no se ha tocado
      Swal.fire({
        icon: 'error',
        title: '¡Error!',
        text: 'Por favor, completa los campos con *',
        showConfirmButton: true,
      });
      return;
    }

    this.provincia = {
      ...this.formCrear.value,
    };
    this.nomencladoresService.postProvincia(this.provincia).subscribe(
      (provinciaCreada) => {
        this.provincia = provinciaCreada;
        Swal.fire({
          icon: 'success',
          title: '¡Éxito!',
          text: 'Provincia creada',
          showConfirmButton: false,
          timer: 1000,
        });
        setTimeout(() => {
          this.router.navigate(['/nomencladores/divisiones/detalles/provincia', this.provincia.id]);
        }, 1000);
      }
      // error => {
      //   console.log('Error:', error);
      //   if (error.error.message === 'Unauthenticated.') {
      //     Swal.fire({
      //       icon: 'error',
      //       title: '¡Tu sesión ha expirado!',
      //       text: 'Por favor, vuelve a iniciar sesión',
      //       showConfirmButton: false,
      //       timer: 1000 // Duración en milisegundos (1 segundo)
      //     }).then(() => {
      //       this.router.navigateByUrl('/auth/login');
      //     });
      //   }
      // }
    );
  }

}
