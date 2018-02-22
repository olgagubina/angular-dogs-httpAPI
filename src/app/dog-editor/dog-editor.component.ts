import { Component, OnInit, Input, Output} from '@angular/core';
import {EventEmitter} from '@angular/core'

import { Dog } from '../dog';
import { DogService } from '../dog.service';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-dog-editor',
  templateUrl: './dog-editor.component.html',
  styleUrls: ['./dog-editor.component.css']
})
export class DogEditorComponent implements OnInit {
  @Input() dog: Dog = new Dog();
  @Output() onClickAddDog:any = new EventEmitter;
  @Output() onClickEditDog:any = new EventEmitter();
  constructor(private dogService: DogService) { }

  ngOnInit() {}

  isEditMode() {
    return this.dog.hasOwnProperty('id')
  }

  cancelEditMode() { 
    this.dog = new Dog();
  }

  addDog() {
    this.onClickAddDog.emit(this.dog);
  }

  editDog() {
    this.onClickEditDog.emit(this.dog);
  }
}