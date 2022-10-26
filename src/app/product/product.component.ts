import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../dati/product.data';
import { ProductsService } from '../products.service';
import { NameShorterPipe } from '../name-shorter.pipe';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fullHeart } from '@fortawesome/free-solid-svg-icons';
import { FavoritesService } from '../favorites.service';

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
  favoritesStatus :Boolean

  faCircleCheck = faCircleCheck
  faHeart = faHeart
  faFullHeart = fullHeart

  availability = true
  addToCartStatus = false

  relatedProducts: Product[] = []

  constructor(private route: ActivatedRoute, private productService: ProductsService, private favoriteService: FavoritesService, private router: Router) {
    const { slug } = route?.snapshot.params ?? {}
    this.product =  productService.searchProduct(slug)
    this.relatedProducts = productService.searchByCategoryProduct(this.product?.category as String, this.product?.name as String)
    this.favoritesStatus = this.favoriteService.checkFavorites(this.product as Product)

    if (this.product === undefined) {
      router.navigateByUrl("/pagina-non-trovata")
    }

  }

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      const { slug } = this.route.snapshot.params ?? {}
      this.product = this.productService.searchProduct(slug)
      this.relatedProducts = this.productService.searchByCategoryProduct(this.product?.category as String, this.product?.name as String)
    })
  }

  onAddToCartCall() {
    if (this.product != undefined) {
      this.productCart = {code: this.product.code, name: this.product?.name, category: this.product.category, slug: this.product.slug, description: this.product.description, price: this.product.price, photo: this.product.photo, stock:this.quantity, reviews: this.product.reviews }
    }
    if(this.quantity <= this.productService.searchProduct(this.product?.slug as String)!.stock) {
      this.productService.addToCart(this.productCart as Product)
      this.productService.searchProduct(this.product?.slug as String)!.stock =  Number(this.productService.searchProduct(this.product?.slug as String)?.stock) - Number(this.quantity)
      this.addToCartStatus = true
    }
  }

  addToFavorites() {
    if(!this.favoritesStatus) {
      this.favoriteService.addToFavorites(this.product as Product)
      this.favoritesStatus = true
    }
    else {
      this.favoriteService.removeToFavorites(this.product as Product)
      this.favoritesStatus = false
    }
  }

  onQuantityChange() {
    if(this.quantity <= this.productService.searchProduct(this.product?.slug as String)!.stock) {
      this.availability = true
    }
    else {
      this.availability = false
    }
  }

  disableModal() {
    this.addToCartStatus = false
  }

}
