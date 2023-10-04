import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  // name : String = "Hello";
  myArr: Array<any> = [12, 'thirteen', false];

  data: { type: string; model: string; year: number } = {
    type: 'Toyota',
    model: 'Corolla',
    year: 2009,
  };
  
  loggedIn : boolean ;


  debugger: any;

  data2: {name:String;age:number;hobbies: string[]} ={
    name: 'Jonathan',
    age: 30,
    hobbies: ['running', 'swimming', 'coding'],
  };

  ngOnInit(): void {
    
    const isTokenNull = localStorage.getItem('token') === null;
    this.loggedIn = isTokenNull ;

    // debugger;
    // console.log("Home component life hook event !!");
    // console.log(this.name);

    // console.log(this.data);
// debugger
    console.log('data ==> ', this.data);
    console.log('data2 ==> ', this.data2);
    console.log('myArr ==> ', this.myArr);
  }
}
