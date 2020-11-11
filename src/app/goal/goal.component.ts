import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service';
import { AlertService } from '../alert-service/alert.service';
import { Quote } from '../quote-class/quote';
import { HttpClient } from '@angular/common/http';
import { QuoteRequestService } from '../quote-http/quote-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})


  export class GoalComponent implements OnInit {

    goals: Goal[];
    alertService: AlertService;
    quote: Quote;

    constructor(goalService: GoalService, alertService: AlertService, private quoteservice: QuoteRequestService, private http: HttpClient) {
      this.goals = goalService.getGoals();
      this.alertService = this.alertService;
    }

  // tslint:disable-next-line: typedef
  addNewGoal(goal){
    const goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate);
    this.goals.push(goal);
  }


    // tslint:disable-next-line: typedef
    toggleDetails(index){
      this.goals[index].showDescription = !this.goals[index].showDescription;
    }

    // tslint:disable-next-line: typedef
    deleteGoal(isComplete, index){
      if (isComplete) {
        const toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`);

        if (toDelete){
          this.goals.splice(index, 1);
          this.alertService.alertMe('The goal has been deleted');
        }
      }
    }
  // tslint:disable-next-line: typedef
  ngOnInit() {
    interface ApiResponse{
      author: string;
      quote: string;
    }
    this.http.get<ApiResponse>('http://quotes.stormconsultancy.co.uk/random.json').subscribe(data => {
      // Succesful API request
      this.quote = new Quote(data.author, data.quote);
    }, err => {
        this.quote = new Quote('Winston Churchill', 'Never never give up!');
        console.log('An error occurred');
    });
  }
}
