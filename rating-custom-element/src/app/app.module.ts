import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {RatingComponent} from './rating.component';
import {createCustomElement} from "@angular/elements";

@NgModule({
    declarations: [
        RatingComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    entryComponents: [RatingComponent]
})
export class AppModule {

    constructor(private injector: Injector) {
        const component = createCustomElement(RatingComponent, {injector});
        customElements.define('mt-rating', component);
    }
    ngDoBootstrap() {}
}
