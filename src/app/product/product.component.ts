import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../dati/product.data';
import { ProductsService } from '../products.service';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faHeart as fullHeart } from '@fortawesome/free-solid-svg-icons';
import { FavoritesService } from '../favorites.service';
import { ThememodeService } from '../thememode.service';

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
  faStar = faStar
  faAngleLeft = faAngleLeft
  faAngleRight = faAngleRight

  availability = true
  addToCartStatus = false

  relatedProducts: Product[] = []

  constructor(private route: ActivatedRoute, private productService: ProductsService, private favoriteService: FavoritesService, private themeModeService :ThememodeService, private router: Router) {
    const { slug } = route?.snapshot.params ?? {}
    this.product =  productService.searchProduct(slug)
    this.relatedProducts = productService.searchByCategoryProduct(this.product?.category as String, this.product?.name as String)
    this.favoritesStatus = this.favoriteService.checkFavorites(this.product as Product)
    if (this.product === undefined) {
      router.navigateByUrl("/pagina-non-trovata")
    }

    //avoid page starting at a wrong position
    window.scrollBy(0, 0)

    window.onscroll = function() {
      window.scrollBy(0,0)
    }

  }

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      const { slug } = this.route.snapshot.params ?? {}
      this.product = this.productService.searchProduct(slug)
      this.relatedProducts = this.productService.searchByCategoryProduct(this.product?.category as String, this.product?.name as String)
      this.favoritesStatus = this.favoriteService.checkFavorites(this.product as Product)
      this.checkAvailability()
    })
  }

  onAddToCartCall() {

    if (this.product != undefined) {
      this.productCart = {code: this.product.code, name: this.product?.name, category: this.product.category, slug: this.product.slug, description: this.product.description, price: this.product.price, photo: this.product.photo, stock:this.quantity, reviews: this.product.reviews, reviewsList: this.product.reviewsList }
    }
    if(this.quantity <= this.productService.searchProduct(this.product?.slug as String)!.stock) {
      this.productService.addToCart(this.productCart as Product)
      this.productService.searchProduct(this.product?.slug as String)!.stock =  Number(this.productService.searchProduct(this.product?.slug as String)?.stock) - Number(this.quantity)
      this.addToCartStatus = true
    }
    this.checkAvailability()
  }

  checkAvailability() {
    if(this.quantity <= this.productService.searchProduct(this.product?.slug as String)!.stock) {
      this.availability = true
    }
    else {
      this.availability = false
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

  checkQuantityInput() {
    if(this.quantity <= 0) {
      this.availability = false
    }
  }

  onQuantityChange() {
    this.checkAvailability()
    this.checkQuantityInput()
  }

  getThemeMode() {
    return this.themeModeService.thememode
  }

  disableModal() {
    this.addToCartStatus = false
  }

  scrollLeft() {
    const reviews_container = document.getElementById("reviews-container");
    const review_card_width = document.getElementById("first-review")?.offsetWidth || 200
    //reviews_container!.style.width = review_card_width * 2 + 100 - 48 + "px"
    if(this.getDeviceType() == "mobile") {
      reviews_container!.scrollLeft += review_card_width * 1.22;
    } else {
      reviews_container!.scrollLeft += review_card_width * 2.5;
    }
  }

  scrollRight() {
    const reviews_container = document.getElementById("reviews-container");
    const review_card_width = document.getElementById("first-review")?.offsetWidth || 200
    if(this.getDeviceType() == "mobile") {
      reviews_container!.scrollLeft -= review_card_width * 1.22;
    } else {
      reviews_container!.scrollLeft -= review_card_width * 2.5;
    }
  }

  getDeviceType() {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
    }
    if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      return "mobile";
    }
      return "desktop";
    }

}
