import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { PaginaNonTrovataComponent } from './pagina-non-trovata/pagina-non-trovata.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"products", component:ProductsComponent},
  {path:"products/:slug", component:ProductComponent},
  {path:"cart", component:CartComponent},
  {path:"pagina-non-trovata", component:PaginaNonTrovataComponent},
  {path:"**", redirectTo:"pagina-non-trovata"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
