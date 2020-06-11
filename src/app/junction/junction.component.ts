import { Component, OnInit } from '@angular/core';
import {JunctionsDataService} from '../service/data/junctions-data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Junction} from '../entities/junction';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';

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

export class Dropdown {
  constructor(public id: number, public groupName: string, public parenGroupID: number, public parentOption: number) {
  }
}

@Component({
  selector: 'app-form',
  templateUrl: './junction.component.html',
  styleUrls: ['./junction.component.css']
})
export class JunctionComponent implements OnInit {

  junctionToCreateOrEdit: Junction;

  hosts: Observable<WLSHost[]>;
  ordnings: Observable<Ordning[]>;
  servers: Observable<Server[]>;
  dropdown: Observable<Dropdown[]>;

  constructor(
    private formsDataService: JunctionsDataService,
    private route: ActivatedRoute,
    private router: Router, private http: HttpClient
  ) { }

  ngOnInit() {
    this.dropdown = this.http.get<Dropdown[]>('./assets/dropdown.json');
    this.servers = this.http.get<Server[]>('./assets/servers.json');
    this.hosts = this.http.get<WLSHost[]>('./assets/hosts.json');
    this.ordnings = this.http.get<Ordning[]>('./assets/ordnings.json');
    this.junctionToCreateOrEdit = new Junction('', new Date(), '', this.dropdown[0], '', this.ordnings[0], this.servers[0], new Date(), new Date());
  }

  saveForm() {
    this.formsDataService.createJunction(this.junctionToCreateOrEdit).
    subscribe(data => {
        if (data === null) {
          console.log('Junction already exists!');
          alert('Junction already exists!');
        } else {
        console.log(data);
        this.router.navigate(['formular']); }
      }
    );
  }


}
