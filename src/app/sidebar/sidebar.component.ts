import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categoryList:Category
  constructor(private productService:ProductsService) { }

  ngOnInit() {
    this.productService.getCategory().subscribe(data => {
      this.categoryList = data;
    })
  }

}
