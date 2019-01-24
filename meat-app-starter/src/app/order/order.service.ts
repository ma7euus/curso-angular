import {Injectable} from "@angular/core";
import {ShoppingCartService} from "../restaurant-detail/shopping-cart/shopping-cart.service";
import {CartItem} from "../restaurant-detail/shopping-cart/cart-item.model";
import {OrderModel} from "./order.model";
import {Observable} from "rxjs/Observable";
import {Headers, Http, RequestOptions} from "@angular/http";
import {MEAT_API} from "../app.api";

@Injectable()

export class OrderService {


    constructor(private cartService: ShoppingCartService, private http: Http) {
    }

    itemsValue(): number {
        return this.cartService.total();
    }

    cartItems(): CartItem[] {
        return this.cartService.items;
    }

    increaseQty(item: CartItem) {
        return this.cartService.increaseQty(item);
    }

    decreaseQty(item: CartItem) {
        return this.cartService.decreaseQty(item);
    }

    remove(item: CartItem) {
        return this.cartService.removeItem(item);
    }

    clear() {
        this.cartService.clear();
    }

    checkOrder(order: OrderModel): Observable<string> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${MEAT_API}/orders`,
            JSON.stringify(order),
            new RequestOptions({headers: headers}))
            .map(response => response.json())
            .map(order => order.id);
    }
}
