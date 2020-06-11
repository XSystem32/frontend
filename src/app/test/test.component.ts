import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DropdownService} from '../service/data/dropdown.service';
import {Ordning, Server, WLSHost} from '../junction/junction.component';
import {HttpClient} from '@angular/common/http';

export class Hosts {
  constructor(public id: number, public groupName: string, public parenGroupID: number, public parentOption: number) {
  }
}

export class Ordnings {
  constructor(public id: number, public groupName: string, public parenGroupID: number, public parentOption: number) {
  }
}

export class Servers {
  constructor(public id: number, public groupName: string, public parenGroupID: number, public parentOption: number) {
  }
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  testForm: FormGroup;
  hosts: {};
  servers: {};
  ordnings: {};


  constructor(private dropdownService: DropdownService, private http: HttpClient) { }

  ngOnInit() {
    this.servers = this.http.get<Server[]>('./assets/servers.json');
    this.hosts = this.http.get<WLSHost[]>('./assets/hosts.json');
    this.ordnings = this.http.get<Ordning[]>('./assets/ordnings.json');

    this.dropdownService.getHosts().subscribe(
      data => this.hosts = data
    );

    this.testForm = new FormGroup({
      host: new FormControl(''),
      server: new FormControl(''),
      ordning: new FormControl('')
    });
  }

  onChangeHost(hostId: number) {
    if (hostId) {
      this.dropdownService.getOrdnings(hostId).subscribe(
        data => {
          this.ordnings = data;
          this.servers = null;
        }
      );
    } else {
      this.servers = null;
      this.ordnings = null;
    }
  }

  onChangeOrdning(ordningId: number) {
      if (ordningId) {
        this.dropdownService.getServers(ordningId).subscribe(
          data => this.servers = data
        );
      } else {
        this.servers = null;
      }
  }

}
