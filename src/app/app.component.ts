import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy  {
  dogName: string;
  dogWeight: number;
  dogBirthDate: Date;
  sayHello: any;
  title = 'my first angular 2.0 adventure!';
  
  constructor() {}
  
  ngOnInit() { 
  	// this.sayHello = window.setInterval(() => console.log('Hello!'),  1000);	
  }
  
  ngOnDestroy(){
  	window.clearInterval(this.sayHello);	
  }
  
  addDog(){
  	/*this.dogs.push({name: this.dogName, 
  				   weight: this.dogWeight, 
  				   birthDate: new Date()});	*/
  }
}