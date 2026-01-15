
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from '../product/product.model';


@Injectable({ providedIn: 'root' })
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products: Product[] = [
     {id:1, designation: "Keyboard", price: 30},
     {id:2, designation: "Mouse", price: 20},
     {id:3, designation: "Screen", price: 120}
    ];
    return { products };
  }

  //Générer nouvel id
  genId(products: Product[]): number {
    return products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
  }
}
