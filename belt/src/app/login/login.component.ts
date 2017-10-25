import { Component, OnInit } from '@angular/core';
import { Item } from './../item';
import { Question } from './../question';
import { ApiService } from './../api.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // used for new user/item
  new_item = new Item();

  //used for delete
  loggedUserName

  constructor(private _apiService: ApiService, private router: Router) { }
  
  ngOnInit() {
    this._apiService.setUser(null);
  }





  onUserSubmit(){
    console.log("before this note",this.new_item);
    this._apiService.createItem(this.new_item, (res) => { //callback is here
      this._apiService.setUser(res.item_content);
      this.loggedUserName = res.item_content;
      console.log(this.new_item);
      this.router.navigate(["/"]) /////****** important to put in the callback function so it is called after data load */
    },() => { //errorback function this is the second parameter of retrieveTasks
      console.log("error something");
    });
    console.log("this note",this.new_item);
    this.new_item = new Item();
    console.log("cleared this note",this.new_item);
    
  } 

}


