import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-all-games',
  templateUrl: './view-all-games.component.html',
  styleUrls: ['./view-all-games.component.css']
})
export class ViewAllGamesComponent implements OnInit {

  gamesList:Product
  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.productService.getGames().subscribe(data => {
      this.gamesList = data;
    })
  }

}
