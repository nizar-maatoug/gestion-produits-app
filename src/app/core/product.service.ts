import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Product } from '../product/product.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private readonly baseUrl = 'api/products';
  private readonly json = new HttpHeaders({ 'Content-Type': 'application/json' });

  private http = inject(HttpClient);

  readonly products = signal<Product[]>([]);


  getAll(): Observable<Product[]> {

    return this.http.get<Product[]>(this.baseUrl).pipe(
      tap(list => this.products.set(list)),
    );

  }






}
