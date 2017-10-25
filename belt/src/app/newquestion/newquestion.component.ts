import { Component, OnInit } from '@angular/core';
import { Item } from './../item';
import { Question } from './../question';
import { ApiService } from './../api.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-newquestion',
  templateUrl: './newquestion.component.html',
  styleUrls: ['./newquestion.component.css']
})
export class NewquestionComponent implements OnInit {

  // used for new question
  new_question = new Question();  

  constructor(private _apiService: ApiService, private router: Router) { }
  
  ngOnInit() {
  }



  onQuestionSubmit(){
    console.log("before this note",this.new_question);
    
    this._apiService.createSub(this.new_question, (res) => {
      this.router.navigate(["/"]);
      console.log("in on submit callback",this.new_question);
    },() => {
      console.log("error something");
    });
  }

}
