import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RestaurantsComponent} from './restaurants/restaurants.component';
import {RestaurantDetailComponent} from './restaurant-detail/restaurant-detail.component';
import {MenuComponent} from './restaurant-detail/menu/menu.component';
import {ReviewsComponent} from './restaurant-detail/reviews/reviews.component';
import {OrderSummaryComponent} from "./order-summary/order-summary.component";
import {NotFoundComponent} from './not-found/not-found.component';
import {LoginComponent} from "./security/login/login.component";
import {LoggedinGuard} from "./security/loggedin.guard";

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', loadChildren: './about/about.module#AboutModule'},
    {path: 'order', loadChildren: './order/order.module#OrderModule', canLoad: [LoggedinGuard]},
    {path: 'order-summary', component: OrderSummaryComponent},
    {path: 'restaurants', component: RestaurantsComponent},
    {path: 'login', component: LoginComponent},
    {
        path: 'restaurants/:id', component: RestaurantDetailComponent,
        children: [
            {path: '', redirectTo: 'menu', pathMatch: 'full'},
            {path: 'menu', component: MenuComponent},
            {path: 'reviews', component: ReviewsComponent}
        ]
    },
    {path: '**', component: NotFoundComponent}
];
