import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-delete-game',
  templateUrl: './delete-game.component.html',
  styleUrls: ['./delete-game.component.css']
})
export class DeleteGameComponent implements OnInit {

  productId=0;
  constructor(
    private activatedRoute:ActivatedRoute,
    private productService:ProductsService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
      this.productId = data.id;

      this.productService.deleteGame(this.productId).subscribe(deletedGame =>{
      })
    })
  }

  backToProducts(){
    this.router.navigateByUrl('products')
  }
}
