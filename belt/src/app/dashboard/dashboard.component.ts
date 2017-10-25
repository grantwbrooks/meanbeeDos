import { Component, OnInit } from '@angular/core';
import { Item } from './../item';
import { Question } from './../question';
import { ApiService } from './../api.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // used for new user/item
  new_item = new Item();
  // used for showing all questions
  questions = [];
  // used for new question
  new_question = new Question();

  //used for delete
  loggedUserName



  constructor(private _apiService: ApiService, private router: Router) { }
  
  ngOnInit() {
    this.show();
    //used for delete need user name to display it or not
    this.loggedUserName = this._apiService.getUser();
  }

  onUserSubmit(){
    console.log("before this note",this.new_item);
    this._apiService.createItem(this.new_item, (res) => { //callback is here
      this._apiService.setUser(res.item_content);
      this.loggedUserName = res.item_content;
      console.log(this.new_item);
      this.router.navigate(["/dashboard"]) /////****** important to put in the callback function so it is called after data load */
    },() => { //errorback function this is the second parameter of retrieveTasks
      console.log("error something");
    });
    console.log("this note",this.new_item);
    this.new_item = new Item();
    console.log("cleared this note",this.new_item);
    
  } 





  show() {
    this._apiService.showItems((res) => { //callback is here
      this.questions = res
      console.log(this.questions)
    },() => { //errorback function this is the second parameter of retrieveTasks
      console.log("error something")
    });
    console.log("this notes array filled up",this.questions);
  }


  delete(question){
    this._apiService.deleteQuestion(question, (res) => { //callback is here
      console.log("delete this question right here",question);
    },() => { //errorback function this is the second parameter of retrieveTasks
      console.log("error something");
    });
    this.show();
  }




  onQuestionSubmit(){
    console.log("before this note",this.new_question);
    
    this._apiService.createSub(this.new_question, (res) => {
      this.router.navigate(["/dashboard"]);
      this.show();  // threw this in there to refresh data since all on one page.
      console.log("in on submit callback",this.new_question);
    },() => {
      console.log("error something");
    });
  }

    



}
