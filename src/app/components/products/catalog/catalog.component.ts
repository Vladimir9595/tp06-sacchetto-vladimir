import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../shared/models/product';
import { Store } from '@ngxs/store';
import { AddToCart } from '../../../shared/actions/cart.actions';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  providers: [ProductService],
})
export class CatalogComponent implements OnInit {
  searchName: string = '';
  searchCategory: string = '';
  searchPrice: number = 0;
  products$: Observable<Product[]>;

  constructor(private productService: ProductService, private store: Store) {
    this.products$ = this.productService.getProducts();
  }

  ngOnInit(): void {}

  addToCart(product: Product) {
    this.store.dispatch(new AddToCart(product));
  }
}
