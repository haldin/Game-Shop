import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/category';
import { Product } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-all-games-by-category',
  templateUrl: './view-all-games-by-category.component.html',
  styleUrls: ['./view-all-games-by-category.component.css']
})
export class ViewAllGamesByCategoryComponent implements OnInit {

  searchCategory:Category;
  gamesList:Product;
  constructor(private activatedRoute:ActivatedRoute, private productService:ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
      this.searchCategory = data.id

      this.productService.getCategoryGames(this.searchCategory).subscribe(categoryData => {
        this.gamesList = categoryData;
      })
    })
  }
}
