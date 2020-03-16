import { Component, OnInit } from '@angular/core';
import {FormGroup, FormArray, FormBuilder, Validators} from '@angular/forms';
import { Junction } from "../entities/junction";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Server} from "../junction/junction.component";


@Component({
  selector: 'app-testform',
  templateUrl: './testform.component.html',
  styleUrls: ['./testform.component.scss']
})

export class TestformComponent implements OnInit{

  junctions: Observable<Junction[]>;

  regTypeSelectedOption: any;
  selectedNav: any;
  navs = ['option 1', 'option 2', 'option 3'];

  constructor(private router: Router, private http: HttpClient) {
  }

  ngOnInit() {
    this.junctions = this.http.get<Junction[]>('./assets/junctions.json');
    console.log(this.junctions)

  }

  setNav(nav:any){
    this.selectedNav = nav;
    if(this.selectedNav == "option 1"){
      this.regTypeSelectedOption = "option 1";
    }
    else if(this.selectedNav == "option 2"){
      this.regTypeSelectedOption = "option 2";
    }
    else if(this.selectedNav == "option 3"){
      this.regTypeSelectedOption = "option 3";
    }
  }

}
