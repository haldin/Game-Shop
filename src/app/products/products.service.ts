import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './products';
import { Observable } from 'rxjs';
import { Category } from '../category'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

constructor(private http:HttpClient) { }

  addGames(game):Observable<Product>{
    const url = 'http://localhost:3000/products'
    return this.http.post<Product>(url, game);
  }
  viewGame(id):Observable<Product>{
    const url = 'http://localhost:3000/products/'+id
    return this.http.get<Product>(url);
  }
  getCategory():Observable<Category>{
    const url = 'http://localhost:3000/category';
    return this.http.get<Category>(url)
  }
  getGames():Observable<Product>{
    const url = 'http://localhost:3000/products';
    return this.http.get<Product>(url)
  }
 updateGame(id, game):Observable<Product>{
    const url = 'http://localhost:3000/products/'+id;
    return this.http.put<Product>(url, game);
  }
  deleteGame(id):Observable<Product>{
    const url = 'http://localhost:3000/products/'+id;
    return this.http.delete<Product>(url);
  }
  getCategoryGames(categoryId):Observable<Product>{
    const url = 'http://localhost:3000/products?categoryId='+categoryId
    return this.http.get<Product>(url);
  }
}
