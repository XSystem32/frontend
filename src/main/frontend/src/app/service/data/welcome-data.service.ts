import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import construct = Reflect.construct;


export class testBean {
  constructor(public message:string) {
  }
}

@Injectable({
  providedIn: 'root'
})


export class WelcomeDataService {

  constructor(
      private http:HttpClient
  ) { }

  executeTest() {
    return this.http.get<testBean>("http://localhost:8080/test-bean")
  }


}
