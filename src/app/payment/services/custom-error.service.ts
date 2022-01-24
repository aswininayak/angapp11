import { Injectable } from '@angular/core';
import { CustomHttpErrorService } from './custom-http-error.service';

@Injectable({
  providedIn: 'root'
})
export class CustomErrorService {
  constructor( 
    private secondServiceMethod: CustomHttpErrorService) { }

  showSnackBar(){
    this.secondServiceMethod.secondServiceMethod();
    }
}
