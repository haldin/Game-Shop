import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddGameComponent } from './add-game/add-game.component';
import { ViewGameComponent } from './view-game/view-game.component';
import { ViewAllGamesComponent } from './view-all-games/view-all-games.component';
import { UpdateGameComponent } from './update-game/update-game.component';
import { DeleteGameComponent } from './delete-game/delete-game.component';
import { ViewAllGamesByCategoryComponent } from './view-all-games-by-category/view-all-games-by-category.component';


@NgModule({
  declarations: [
    ProductsComponent,
    AddGameComponent,
    ViewGameComponent,
    ViewAllGamesComponent,
    UpdateGameComponent,
    DeleteGameComponent,
    ViewAllGamesByCategoryComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ],
  exports:[
    ProductsComponent,
    AddGameComponent,
    ViewGameComponent,
    ViewAllGamesComponent,
    UpdateGameComponent,
    DeleteGameComponent,
    ViewAllGamesByCategoryComponent
  ]
})
export class ProductsModule { }
