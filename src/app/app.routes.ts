import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';


export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products' },

  {
    path: 'products',
    component: ProductComponent,
    children: [
      { path: '', component: ProductListComponent },
      { path: ':id', component: ProductDetailComponent },
      { path: ':id/edit', component: ProductEditComponent },
    ],
  },

  { path: '**', component: PageNotFoundComponent },
];

