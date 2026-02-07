import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../core/product.service';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {

  productService = inject(ProductService);

  ngOnInit(): void {
    this.productService.getAll().subscribe();
  }

}
