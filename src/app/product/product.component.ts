import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../dati/product.data';
import { ProductsService } from '../products.service';
import { NameShorterPipe } from '../name-shorter.pipe';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges {

  productCart?:Product
  product?:Product
  subscription?:Subscription
  quantity: Number = 1

  relatedProducts: Product[] = []

  constructor(private route: ActivatedRoute, private productService: ProductsService, private router: Router) {
    const { slug } = route?.snapshot.params ?? {}
    this.product =  productService.searchProduct(slug)
    this.relatedProducts = productService.searchByCategoryProduct(this.product?.category as String)

  }

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      const { slug } = this.route.snapshot.params ?? {}
      this.product = this.productService.searchProduct(slug)
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.product?.name);

  }

  onAddToCartCall() {
    console.log(this.quantity);

    if (this.product != undefined) {
      this.productCart = {code: this.product.code, name: this.product?.name, category: this.product.category, slug: this.product.slug, description: this.product.description, price: this.product.price, photo: this.product.photo, stock:this.quantity, reviews: this.product.reviews }
    }
    this.productService.addToCart(this.productCart as Product)
    console.log(this.productService.cart);

  }
}
