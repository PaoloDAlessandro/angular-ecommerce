import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import './training_javascript'
import './training_typescript';
import { ApplicaColoreDirective } from './applica-colore.directive';
import { RiduciLunghezzaPipe } from './riduci-lunghezza.pipe';
import { FiltraArrayPipe } from './filtra-array.pipe';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { PaginaNonTrovataComponent } from './pagina-non-trovata/pagina-non-trovata.component';
import { ProductComponent } from './product/product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    PaginaNonTrovataComponent,
    ProductComponent
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
