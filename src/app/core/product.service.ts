import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, Signal, signal } from '@angular/core';
import { Product } from '../product/product.model';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private readonly baseUrl = 'api/products';
  private readonly json = new HttpHeaders({ 'Content-Type': 'application/json' });

  private http = inject(HttpClient);

  //gérer l'état des produits: signal initialement vide
  readonly products = signal<Product[]>([]);

  //gérer l'état du produit séléctionné
  readonly product = signal<Product|null>(null);

  //gérer les erreurs d'API
  readonly error = signal<String|null>(null);

  //gérer l'état de l'API
  readonly isLoading = signal<boolean>(false);


  getAll(): Observable<Product[]> {
    this.isLoading.set(true);
    return this.http.get<Product[]>(this.baseUrl).pipe(
      tap(list => this.products.set(list)),
      tap(list => this.isLoading.set(false)),
    );
  }

  getById(id:number): Observable<Product|null>{
    this.isLoading.set(true);
    return this.http.get<Product|null>(`{this.baseUrl}/{id}`).pipe(
      tap(p => this.product.set(p)),
      tap(p => this.isLoading.set(false)),
    );
  }

  create(product: Product){
    this.isLoading.set(true);
    return this.http.post<Product>(this.baseUrl,product,{ headers: this.json }).pipe(
      tap(created => this.getAll()),
      catchError(err => this.fail(err)),
    );
  }

  update(product: Product){
    this.isLoading.set(true);
    return this.http.put<Product>(this.baseUrl,product,{ headers: this.json })
    .pipe(
      tap(updated => this.getAll()),
      catchError(err => this.fail(err)),
    );
  }

  delete(id: number){
    this.isLoading.set(true);
    return this.http.delete(`{this.baseUrl}/{id}`).pipe(
      tap(this.getAll()),
      catchError(err => this.fail(err))
    );
  }

  fail(err:unknown){
    const msg = (err as any)?.message ?? 'Erreur inconnue';
    return throwError(() => new Error(msg));
  }






}
