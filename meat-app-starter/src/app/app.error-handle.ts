import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export class ErrorHandle {
    static handleError(error: HttpErrorResponse | any) {
        let errorMessage: string;
        if (error instanceof HttpErrorResponse) {
            errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText} ${error.error}`;
        } else {
            errorMessage = error.toString();
        }
        return Observable.throw(errorMessage);
    }
}
