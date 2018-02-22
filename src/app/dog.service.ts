import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Dog } from './dog';
import { Observable } from 'rxjs/Observable';

// const DOGS: Dog[] = [
//         {id: 1, name: 'Rex', weight: 20, birthDate: new Date(2006, 2, 21)},
// 	{id: 2, name: 'Woof', weight: 8, birthDate: new Date(2011, 8, 12)},
// 	{id: 3, name: 'Chuck', weight: 28, birthDate: new Date(2015, 5, 6)},
// 	{id: 4, name: 'Barkley', weight: 4, birthDate: new Date(2012, 3, 15)},
// 	{id: 5, name: 'Prince', weight: 65, birthDate: new Date(2017, 5, 4)}
// ];

@Injectable()
export class DogService {
  // dogs: Dog[] = DOGS;
  lastId: number = 5;

  constructor(private http:HttpClient) {}
  
  getDogs():Observable<Dog[]> {
    var res =  this.http.get<Dog[]>('/api/dogs');
    return res;
  }

  addDog(newDog: Dog) : Observable<Dog>{
      return this.http.post<Dog>('/api/dogs', { dog: newDog });
  }

  updateDog(editDog : Dog) : Observable<Dog>{
    return this.http.put<Dog>('/api/dogs/'+editDog.id, {dog: editDog});
  }

  deleteDog(deleteDog: Dog) : Observable<Dog>{
    return this.http.delete<Dog>('/api/dogs/'+deleteDog.id);
  }
}