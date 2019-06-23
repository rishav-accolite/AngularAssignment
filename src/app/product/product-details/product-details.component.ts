import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap, Router} from '@angular/router';
import { ProductService } from '../product.service';
import { IProduct } from '../IProduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId:number;
  product:IProduct=null;
  isLoaded:boolean=false
  constructor(private route:ActivatedRoute, private productService:ProductService,private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=>
    {
      this.productId=parseInt(params.get('id'));
      this.productService.getProductList().subscribe(data=>{
        data.forEach(element => {
          if(element.id===this.productId)
          {
            this.product=element;
          } 
        });
        if(this.product===null)
        {
          this.router.navigate(['/pageNotFound']);
        }
        this.isLoaded=true;
      });
    });
  }

}
