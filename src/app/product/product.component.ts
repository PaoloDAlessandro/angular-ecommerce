import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../dati/product.data';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product?:Product
  subscription?:Subscription

  constructor(private route: ActivatedRoute, private productService: ProductsService, private router: Router) {
    const { slug } = route?.snapshot.params ?? {}
    this.product =  productService.searchProduct(slug)
    console.log(this.product);

   }

  ngOnInit(): void {
  }

}
