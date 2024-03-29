import { Component, ViewChild } from '@angular/core';
import { Distrito } from '../../interfaces/distritos.interface';
import { Provincia } from '../../interfaces/provincia.interface';
import { Municipio } from '../../interfaces/municipio.interfaces';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { OCCM } from '../../interfaces/occm.interface';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { NomencladoresService } from '../../services/nomencladores.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { tipoOficina } from '../../interfaces/tipo-oficina.interface';

@Component({
  selector: 'app-occm',
  templateUrl: './occm.component.html',
  styleUrls: ['./occm.component.css']
})
export class OccmComponent {

  occm: OCCM[] = [];
  displayedColumns: string[] = [
    'select',
    'id_occm',
    'nit',
    'descripcion',
    'direccion',
    'telefono',
    'provincia_id',
    'municipio_id',
    'distrito_id',
    'tipo_oficina_id',
    //'padre_id',
    'actions'];
  dataSource = new MatTableDataSource<OCCM>([]);
  selection = new SelectionModel<OCCM>(true, []);
  loading = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private nomencladoresService: NomencladoresService, private router: Router) { }

  ngOnInit() {
    this.cargarOCCM();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  cargarOCCM() {
    this.nomencladoresService.getOCCMS().subscribe((occm) => {
      this.occm = occm;
      this.dataSource.data = occm;
      console.log(this.occm);
      this.loading = false;
    });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: OCCM): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id_occm + 1}`;
  }

  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent!: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  eliminarOCCM(id: number) {
    if (id !== undefined) {
      Swal.fire({
        title: '¿Estás seguro?',
        text: '¡No podrás revertir esto!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: ' #3f51b5',
        cancelButtonColor: '#f44336',
        confirmButtonText: 'Sí, eliminarlo',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          this.nomencladoresService.deleteOCCM(id).subscribe(
            () => {
              // Eliminar sin recargar la página
              const index = this.occm.findIndex((occm) => occm.id === id);
              if (index !== -1) {
                this.occm.splice(index, 1);
              }
              this.cargarOCCM();
              console.log('OCCM eliminado exitosamente');
            },
            // (error) => {
            //   console.error(error);
            //   if (error?.error?.message === 'Unauthenticated.') {
            //     Swal.fire({
            //       icon: 'error',
            //       title: '¡Tu sesión ha expirado!',
            //       text: 'Por favor, vuelve a iniciar sesión',
            //       showConfirmButton: false,
            //       timer: 1000, // Duración en milisegundos (1 segundo)
            //     }).then(() => {
            //       this.router.navigateByUrl('/auth/login');
            //     });
            //   }
            // }
          );
        }
      });
    }
  }

}
