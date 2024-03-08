import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { NomencladoresService } from '../../services/nomencladores.service';

const books = [
  { title: 'Angular in Action', author: 'Jeremy Wilken', genre: 'Programming' },
  { title: 'Clean Code', author: 'Robert C. Martin', genre: 'Programming' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction' },
  // Agrega más libros según sea necesario
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  searchForm: FormGroup;
  books: any[] = [];
  filteredBooks: any[] = [];

  constructor(private fb: FormBuilder, private bookService: NomencladoresService) {
    this.searchForm = this.fb.group({
      criteria: [''],
    });
  }

  ngOnInit() {
    this.getBooks().subscribe((data) => {
      this.books = data;
      this.filteredBooks = data;
    });
  }

  getBooks(): Observable<any[]> {
    return of(this.books);
  }

  buscar() {
    const criteria = this.searchForm.value.criteria;
    const criteriosArray = criteria.split(',').map((criterio: string) => criterio.trim());
    this.filteredBooks = this.filterBooks(criteriosArray);
  }

  private filterBooks(criterios: string[]): any[] {
    return this.books.filter((book) => {
      return criterios.some(criterio => 
        book.title.toLowerCase().includes(criterio.toLowerCase()) ||
        book.author.toLowerCase().includes(criterio.toLowerCase()) ||
        book.genre.toLowerCase().includes(criterio.toLowerCase())
      );
    });
  }
}
