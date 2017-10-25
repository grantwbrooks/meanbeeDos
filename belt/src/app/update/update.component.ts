import { Component, OnInit } from '@angular/core';
import { Item } from './../item';
import { Question } from './../question';
import { ApiService } from './../api.service';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  question_id;
  new_question = new Question();

  constructor(private _apiService: ApiService, private router: Router, private _route: ActivatedRoute) {
    this._route.paramMap.subscribe( params => {
      this.question_id = params.get('id')
      console.log(params.get('id'));
    })
  }
  
  ngOnInit() {
    this.showOne(this.question_id)
  }

  showOne(questionID) {
    this._apiService.showItem(questionID, (res) => { //callback is here
      this.new_question = res
    },() => { //errorback function this is the second parameter of retrieveTasks
      console.log("error something")
    });
    console.log("this is one item",this.new_question);
  }

  updateQuestion() {
    this._apiService.updateQuestion(this.question_id, this.new_question, (res) => {
      this.router.navigate(["/dashboard"])
    },() => {
      console.log("error something")
    });
    console.log("this is one item",this.new_question);
  }

}
