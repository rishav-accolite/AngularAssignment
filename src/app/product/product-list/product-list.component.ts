import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../IProduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private products:IProduct[];
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productService.getProductList().subscribe(data=>this.products=data);
  }

}
