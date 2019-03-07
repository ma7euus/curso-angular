import {Injectable} from "@angular/core";
import {ShoppingCartService} from "../restaurant-detail/shopping-cart/shopping-cart.service";
import {CartItem} from "../restaurant-detail/shopping-cart/cart-item.model";
import {OrderModel} from "./order.model";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {MEAT_API} from "../app.api";

@Injectable()

export class OrderService {


    constructor(private cartService: ShoppingCartService, private http: HttpClient) {
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
        return this.http.post<OrderModel>(`${MEAT_API}/orders`, order)
            .map(order => order.id);
    }
}
