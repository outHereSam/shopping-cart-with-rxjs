import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/IProduct';
import { Observable } from 'rxjs';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CartItem } from '../../interfaces/ICartItems';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.sass',
})
export class ProductsListComponent {
  products$: Observable<CartItem[]>;

  constructor(private productsService: ProductsService) {
    this.products$ = this.productsService.fetchProducts();
  }

  ngOnInit() {}
}
