import { Component, OnInit } from '@angular/core';
import { Product } from '../dati/product.data';
import { FavoritesService } from '../favorites.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faFullHeart } from '@fortawesome/free-solid-svg-icons';
import { ThememodeService } from '../thememode.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favoriteProducts: Product[] = []
  faFullHeart = faFullHeart
  faStar = faStar

  research :string = ""

  constructor(private favoriteService: FavoritesService, private themeModeService: ThememodeService) {
    this.favoriteProducts = favoriteService.favorites
  }

  ngOnInit(): void {
  }

  removeFromFavorites(product: Product) {
    this.favoriteService.removeToFavorites(product)
    this.favoriteProducts = this.favoriteService.favorites
  }

  getThemeMode() {
    return this.themeModeService.thememode
  }

}
