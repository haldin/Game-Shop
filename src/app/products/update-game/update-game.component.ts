import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-update-game',
  templateUrl: './update-game.component.html',
  styleUrls: ['./update-game.component.css']
})
export class UpdateGameComponent implements OnInit {

  productId=0;
  productDetails:Product;
  updatedGame=false;
  constructor(
    private activatedRoute:ActivatedRoute,
    private productService:ProductsService,
    private router:Router,
    private toasrt:ToastrService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
      this.productId = data.id;


      this.productService.viewGame(this.productId).subscribe(productData => {
        this.productDetails = productData;
        console.log(this.productDetails);

      })
    })
  }


  updateGame(form){
      this.productService.updateGame(this.productId, form.value).subscribe(data => {
      console.log(data);
      this.updatedGame=true;
      this.toasrt.success('You successfully added a game')
      this.router.navigateByUrl('products')
    })
  }
  backToProducts(){
  }

}
