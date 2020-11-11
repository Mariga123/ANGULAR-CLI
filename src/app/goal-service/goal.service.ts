import { Injectable } from '@angular/core';
import { Goals } from '../goalList';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  // tslint:disable-next-line: typedef
  getGoals(){
    return Goals;
  }

  constructor() { }
}
