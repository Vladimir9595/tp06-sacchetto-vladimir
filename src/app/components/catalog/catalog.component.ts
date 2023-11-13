import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../shared/models/product';
import { Store } from '@ngxs/store';
import { AddToCart } from '../../shared/actions/cart.actions';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService, private store: Store) {
    productService.filteredProducts.subscribe((data) => {
      this.filteredProducts = data;
    });
  }

  ngOnInit(): void {}

  addToCart(product: Product) {
    this.store.dispatch(new AddToCart(product));
  }
}
