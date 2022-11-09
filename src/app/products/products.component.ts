import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../dati/product.data';
import { ProductsService } from '../products.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ProductSearch } from '../product-search.pipe';
import { ThememodeService } from '../thememode.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  faBoxOpen = faBoxOpen;
  faStar = faStar;
  faFilter = faFilter;
  name = ""
  private productsSubscription?:Subscription

  products:Product[] = []

  constructor(private productsService:ProductsService, private themeModeService :ThememodeService) {
    this.products = productsService.products
   }

  ngOnInit(): void {
  }

  getThemeMode() {
    return this.themeModeService.thememode
  }

  /*
  searchProduct() {
    this.products = this.productsService.products.filter(p => p.name.toLowerCase().indexOf(this.name.toLowerCase()) != -1)
  }
  */

}
