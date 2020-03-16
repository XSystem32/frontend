import { Component, OnInit } from '@angular/core';
import {ViewOptions} from "../view/view.component";
import {WelcomeDataService} from "../service/data/welcome-data.service";
import {error} from "util";

@Component({
  selector: 'app-wlselfservice',
  templateUrl: './isam.component.html',
  styleUrls: ['./isam.component.scss']
})
export class ISAMComponent implements OnInit {

  constructor(private service: WelcomeDataService) { }

  welcomeMessage: string;

  ngOnInit() {
  }

  getWelcome() {
    this.service.executeTest().subscribe(
        response => this.handleResponse(response)
    );
  }


  handleErrorResponse(error) {
    this.welcomeMessage = error.error.message
  }

  handleResponse(response) {
    this.welcomeMessage = response.message;
  }


}
