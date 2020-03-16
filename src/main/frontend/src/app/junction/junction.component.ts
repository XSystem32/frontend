import { Component, OnInit } from '@angular/core';
import {JunctionsDataService} from "../service/data/junctions-data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Junction} from "../entities/junction";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormGroup} from "@angular/forms";

export class Server {
  constructor(public id: number, public name: string) {
  }
}

export class WLSHost {
  constructor(public id: number, public name: string) {
  }
}

export class Ordning {
  constructor(public id: number, public name: string) {
  }
}

@Component({
  selector: 'app-form',
  templateUrl: './junction.component.html',
  styleUrls: ['./junction.component.scss']
})
export class JunctionComponent implements OnInit {

  junctionForm: FormGroup;

  junctionToCreateOrEdit: Junction;

  hosts: Observable<WLSHost[]>;
  ordnings: Observable<Ordning[]>;
  servers: Observable<Server[]>;

  constructor(
      private formsDataService: JunctionsDataService,
      private route:ActivatedRoute,
      private router: Router, private http: HttpClient
  ) { }

  ngOnInit() {
    this.servers = this.http.get<Server[]>('./assets/servers.json');
    this.hosts = this.http.get<WLSHost[]>('./assets/hosts.json');
    this.ordnings = this.http.get<Ordning[]>('./assets/ordnings.json');

    this.junctionToCreateOrEdit = new Junction("", new Date(), "", this.hosts[0], "", this.ordnings[0], this.servers[0], new Date(), new Date(), true, "");
  }

  saveForm() {
      this.formsDataService.createJunction(this.junctionToCreateOrEdit).
        subscribe(data => {
          console.log(data);
          if(this.junctionToCreateOrEdit.inError == true) {
            console.log("Already exists")
          }
          this.router.navigate(['formular'])
        }
      )
    }

}
