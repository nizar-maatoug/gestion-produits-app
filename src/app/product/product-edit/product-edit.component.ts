import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { Form, FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductService } from '../../core/product.service';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-edit',
  imports: [FormsModule,RouterLink, CurrencyPipe],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css',
})
export class ProductEditComponent  implements OnInit{

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  productService= inject(ProductService);


  product = signal<Product>({id:0,designation:'',price:0});

  private id:string|null= null;
  private isNew:boolean = true;
  caption = signal("Ajouter Produit");


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id != null){// edit product
      this.productService.getById(Number(this.id)).subscribe(
        p => this.product.set(p!)
      );
      this.caption.update(()=> "Modifier produit");
    }
    else{
      this.caption.update(()=> "Ajouter produit");
    }
  }



  submit(form:NgForm){
    if(form.valid)
    {
      if (this.isNew){
        this.productService.create(this.product()!).subscribe();
      }
      else{
        this.productService.update(this.product()!).subscribe();
      }
      //naviguer back
      this.router.navigate(['/products']);

    }
  }
}
