import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Product } from '../interfaces/IProduct';
import { CartItem } from '../interfaces/ICartItems';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private url = '../../assets/data.json';
  constructor(private http: HttpClient) {}

  fetchProducts(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.url).pipe(
      map((products) => products),
      catchError((error) => {
        of([]);
        throw 'There was an error fetching the data' + error;
      })
    );
  }
}
