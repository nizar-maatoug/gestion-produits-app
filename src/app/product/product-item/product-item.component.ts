import { Component, input } from '@angular/core';
import { Product } from '../product.model';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-item',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  product = input.required<Product>();
}
