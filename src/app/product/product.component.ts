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

  productCart?:Product
  product?:Product
  subscription?:Subscription
  quantity: Number = 1

  constructor(private route: ActivatedRoute, private productService: ProductsService, private router: Router) {
    const { slug } = route?.snapshot.params ?? {}
    this.product =  productService.searchProduct(slug)
   }

  ngOnInit(): void {
  }

  onAddToCartCall() {
    if (this.product != undefined) {
      this.productCart = {code: this.product.code, name: this.product?.name, category: this.product.category, slug: this.product.slug, description: this.product.description, price: this.product.price, photo: this.product.photo, stock:this.quantity, reviews: this.product.reviews }
    }
    this.productService.addToCart(this.productCart as Product)
    console.log(this.productService.cart);

  }

}
