import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../dati/product.data';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  userCart :Product[] = []
  total :number = 0

  checkOutForm: FormGroup

  firstName = ""

  constructor(private productsService :ProductsService) {
    this.userCart = this.productsService.cart
    this.cartTotal()
    this.checkOutForm = new FormGroup({
      "firstName": new FormControl("Pippo", Validators.required),
      "lastName": new FormControl(null, Validators.required),
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "address": new FormControl(null, Validators.required),
      "country": new FormControl(null, Validators.required),
      "zip": new FormControl(null, Validators.required),
      "nameOnCard": new FormControl(null, Validators.required),
      "cardNumber": new FormControl(null, [Validators.required, Validators.minLength(15), Validators.maxLength(19)]),
      "expirationDate": new FormControl(null, Validators.required),
      "cvv": new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
    })
   }

  ngOnInit(): void {
  }

  cartTotal() {
    this.userCart.forEach(product => {
      this.total += Number(product.price) * Number(product.stock)
    });
    this.total = Number(this.total.toFixed(2))
  }

  onSubmit() {
    console.log(this.checkOutForm);

  }

}
