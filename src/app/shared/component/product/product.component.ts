import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Iproducts } from '../../model/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private _route:ActivatedRoute,
      private _productsService:ProductsService,
      private _router:Router
    ) { }
  prodId !:number;
  pObj !: Iproducts;
  ngOnInit(): void {

 this._route.params
 .subscribe((params:Params)=>{
  this.prodId= +params['productId'];
  this.pObj=this._productsService.getProduct(this.prodId)
 })


  }
  gotoEditProduct(){
   this._router.navigate(['products',this.prodId,'edit'],{
    queryParamsHandling:"preserve"
   }

   )
  }
}
