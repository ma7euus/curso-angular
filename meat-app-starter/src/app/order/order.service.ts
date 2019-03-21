import {Injectable} from "@angular/core";
import {ShoppingCartService} from "../restaurant-detail/shopping-cart/shopping-cart.service";
import {CartItem} from "../restaurant-detail/shopping-cart/cart-item.model";
import {OrderModel} from "./order.model";
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MEAT_API} from "../app.api";
import {LoginService} from "../security/login/login.service";

@Injectable()

export class OrderService {


    constructor(private cartService: ShoppingCartService,
                private http: HttpClient,
                private loginService: LoginService) {
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
        let headers = new HttpHeaders();
        if (this.loginService.isLoggedIn()) {
            headers = headers.set('Authorization', `Bearer ${this.loginService.user.accessToken}`);
        }
        return this.http.post<OrderModel>(`${MEAT_API}/orders`, order, {headers: headers})
            .map(order => order.id);
    }
}
