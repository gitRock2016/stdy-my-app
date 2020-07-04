import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path:'', component:ProductListComponent},
  {path:'detail', component:ProductDetailComponent}
];

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [],
})
export class ProductModule { }
