import { Component, DoCheck, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Product } from '../dati/product.data';
import { ProductsService } from '../products.service';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, DoCheck {

  userCart :Product[] = []
  total :number = 0
  faCircleCheck = faCircleCheck

  formSubmit: boolean = false

  constructor(private productsService :ProductsService) {
    this.userCart = this.productsService.cart
    this.cartTotal()
   }

  ngOnInit(): void {
  }

  ngDoCheck(): void {

  }

  cartTotal() {
    this.userCart.forEach(product => {
      this.total += Number(product.price) * Number(product.stock)
    });
    this.total = Number(this.total.toFixed(2))
  }

  onSubmit(ngForm: NgForm) {
    this.formSubmit = true
    this.productsService.cleanCart()
  }

}
