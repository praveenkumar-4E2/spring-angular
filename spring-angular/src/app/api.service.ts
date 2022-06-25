import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/product';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL="http://localhost:8080/products";
  private SERVER_URL1="http://localhost:8080/addproduct";

  constructor(private httpClient :HttpClient) { }

  public get():Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.SERVER_URL);
  }

  saveProduct(data: any){
    return this.httpClient.post(this.SERVER_URL1,data)
  }

  


}
