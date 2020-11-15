import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddGameComponent } from './add-game/add-game.component';
import { DeleteGameComponent } from './delete-game/delete-game.component';

import { UpdateGameComponent } from './update-game/update-game.component';
import { ViewAllGamesByCategoryComponent } from './view-all-games-by-category/view-all-games-by-category.component';
import { ViewAllGamesComponent } from './view-all-games/view-all-games.component';
import { ViewGameComponent } from './view-game/view-game.component';

const routes: Routes = [
  { path: '', component: ViewAllGamesComponent },
  { path: 'add-game', component: AddGameComponent },
  { path: 'delete-game/:id', component: DeleteGameComponent },
  { path: 'update-game/:id', component: UpdateGameComponent },
  { path: 'view-game/:id', component: ViewGameComponent },
  { path: 'category/:id', component: ViewAllGamesByCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
