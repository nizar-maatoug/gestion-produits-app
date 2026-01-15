import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../core/product.service';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit{

  productService = inject(ProductService);

  ngOnInit(): void {
    this.productService.getAll().subscribe();
  }
}
