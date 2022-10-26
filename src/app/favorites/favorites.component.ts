import { Component, OnInit } from '@angular/core';
import { Product } from '../dati/product.data';
import { FavoritesService } from '../favorites.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favoriteProducts: Product[] = []

  faStar = faStar

  constructor(private favoriteService: FavoritesService) {
    this.favoriteProducts = favoriteService.favorites
    console.log(this.favoriteProducts.length);


  }

  ngOnInit(): void {
  }

}
