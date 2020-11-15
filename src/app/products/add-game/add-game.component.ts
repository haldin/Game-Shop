import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  constructor(
    private productService:ProductsService,
    private router:Router,
    private toasrt:ToastrService
    ) { }

  ngOnInit(): void {
  }

  addNewGame(form){

    let newGame={
      name:form.value.gameName,
      categoryId:form.value.categoryId,
      image:form.value.image,
      price:form.value.price,
    }

    this.productService.addGames(newGame).subscribe(data =>{
      console.log(data);
      this.toasrt.success('You successfully added a game')
    })
    this.router.navigateByUrl('products');
  }

}
