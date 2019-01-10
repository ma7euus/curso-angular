import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCatrService: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): CartItem[] {
    return this.shoppingCatrService.items;
  }

  removeItem(item: CartItem) {
    this.shoppingCatrService.removeItem(item);
  }

  addItem(item: MenuItem) {
    this.shoppingCatrService.addItem(item);
  }

  clear() {
    this.shoppingCatrService.clear();
  }

  total(): number {
    return this.shoppingCatrService.total();
  }
}
