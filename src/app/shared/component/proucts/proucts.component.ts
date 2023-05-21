import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../../model/products';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-proucts',
  templateUrl: './proucts.component.html',
  styleUrls: ['./proucts.component.scss']
})
export class ProuctsComponent implements OnInit {

  productsData !:Array<Iproducts>
  constructor(private _productService:ProductsService) { }

  ngOnInit(): void {
    this.productsData=this._productService.getAllProduct()
  }

}
