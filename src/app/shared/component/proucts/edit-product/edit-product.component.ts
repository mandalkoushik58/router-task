import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Iproducts, tpstatus } from 'src/app/shared/model/products';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
   prodId !:number;
   pObj!:Iproducts;
   canEditProd! : number;
  constructor(private _router:Router,
    private _route:ActivatedRoute,
    private _productsService:ProductsService) { }

  ngOnInit(): void {
    this._route.params
    .subscribe((params:Params)=>{
      this.prodId = +params['productId']
      this.pObj=this._productsService.getProduct(this.prodId)
    })
      this._route.queryParams
      .subscribe((params:Params)=>{
          console.log(params)
          this.canEditProd=+params['canEdit']
      })
  }
updateProduct(pname:HTMLInputElement,pstatus:HTMLSelectElement){
  let obj:Iproducts={
    pname:pname.value,
    pstatus:pstatus.value as tpstatus,
    pid:this.prodId,
    canReturn:this.pObj.canReturn
  }
  this._productsService.updateProduct(obj);
  this._router.navigate(["/products",this.prodId])
}
}



