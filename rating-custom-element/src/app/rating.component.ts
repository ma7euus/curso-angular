import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'mt-rating',
    templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

    @Output('rated') rated = new EventEmitter<number>()
    @Input() rate: number = 0;

    rates: number[] = [1, 2, 3, 4, 5];

    previousRate: number;

    constructor() {
    }

    ngOnInit() {
    }

    setRate(r: number) {
        this.rate = r;
        this.previousRate = undefined;
        this.rated.emit(this.rate);
    }

    setTempRate(r: number) {
        if(this.previousRate === undefined){
            this.previousRate = this.rate;
        }
        this.rate = r;
    }


    clearTempRate() {
        if(this.previousRate !== undefined){
            this.rate = this.previousRate;
            this.previousRate = undefined;
        }
    }
}
