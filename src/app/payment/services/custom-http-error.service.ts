import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CustomHttpErrorService {

  constructor(    private snackBar: MatSnackBar    ) { }

  secondServiceMethod(){
    this.snackBar.open('Message','Action',{
      duration: 3000
    })

  }
}
