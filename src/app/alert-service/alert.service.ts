import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  // tslint:disable-next-line: typedef
  alertMe(message: string){
    alert(message);
  }

  constructor() { }
}
