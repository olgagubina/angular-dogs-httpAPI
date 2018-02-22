import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import { Dog } from '../dog';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  dogs: any[];
  title: string;
  selectedDog: Dog = new Dog();
  constructor(private dogService: DogService) { }

  ngOnInit() {
  	this.title = "Our dogs";
    this.dogService.getDogs()
    .subscribe(
      data => 
      this.dogs = data, 
      error => {
        console.error(error)
    });  
  }

  addDog(dog){
  	this.dogService.addDog(dog).subscribe(
      data => 
      this.dogs.push(data), 
      error => {
        console.error(error)
      });  	
  }

  updateDog(dog) {
  this.dogService.updateDog(dog).subscribe(data =>{
    var updateDogIndex = this.dogs.findIndex((dog) => dog.id == data.id);
    this.dogs[updateDogIndex] = data;
    this.selectedDog = new Dog();
    }, 
    error => {
      console.error(error)
    })
  }

  editDog(dog:Dog) {
    this.selectedDog = Object.assign({}, dog);
  }

  deleteDog(deleteDog:Dog) {
    this.dogService.deleteDog(deleteDog).subscribe(data => {
      var deleteDogIndex = this.dogs.findIndex((dog) => dog.id.toString() == deleteDog.id.toString());
      this.dogs.splice(deleteDogIndex, 1);
    }, 
    error => {
      console.error(error)
    })
  }
}