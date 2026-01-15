import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ProductComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
