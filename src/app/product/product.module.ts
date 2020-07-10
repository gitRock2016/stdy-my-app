import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {
    path: 'products', component: ProductComponent,
    children: [
      { path: '', component: ProductListComponent },
      { path: 'detail/:productno', component: ProductDetailComponent }
    ]
  },
  
];

@NgModule({
  declarations: [
    ProductComponent,
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
