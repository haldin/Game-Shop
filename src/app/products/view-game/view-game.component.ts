import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-game',
  templateUrl: './view-game.component.html',
  styleUrls: ['./view-game.component.css']
})
export class ViewGameComponent implements OnInit {

  product:Product;
  productId= 0;
  constructor(private activatedRoute:ActivatedRoute, private productService:ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
      this.productId = data.id
    })
    this.productService.viewGame(this.productId).subscribe(productData => {
        this.product = productData;
      })

  }
}


