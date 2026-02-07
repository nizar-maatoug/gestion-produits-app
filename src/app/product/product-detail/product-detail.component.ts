import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../core/product.service';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit{

  private route = inject(ActivatedRoute);
  productService= inject(ProductService);

  ngOnInit(): void {
    this.productService.getById(Number(this.route.snapshot.paramMap.get('id'))).subscribe();
  }



}
