import { Component, OnInit } from '@angular/core';
import { products } from '../../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products:any;
  constructor() { }


  // products:any = [1,2,3,4]
  ngOnInit(): void {
    this.products = products;
  }

}
