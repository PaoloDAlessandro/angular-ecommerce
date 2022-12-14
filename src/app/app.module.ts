import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { PaginaNonTrovataComponent } from './pagina-non-trovata/pagina-non-trovata.component';
import { ProductComponent } from './product/product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartComponent } from './cart/cart.component';
import { NameShorterPipe } from './name-shorter.pipe';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductSearch } from './product-search.pipe';
import { FavoritesComponent } from './favorites/favorites.component';
import { FavoriteSearchPipe } from './favorite-search.pipe';
import { ProductOrderbyPipe } from './product-orderby.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    PaginaNonTrovataComponent,
    ProductComponent,
    CartComponent,
    NameShorterPipe,
    CheckoutComponent,
    ProductSearch,
    FavoritesComponent,
    FavoriteSearchPipe,
    ProductOrderbyPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
