import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/IProduct';
import { Observable } from 'rxjs';
import { AsyncPipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.sass',
})
export class ProductsListComponent {
  products$: Observable<Product[]>;

  constructor(private productsService: ProductsService) {
    this.products$ = this.productsService.fetchProducts();
  }

  ngOnInit() {}
}
